[ memory leak of map ]

  * 다음 블로그를 참조하여 정리한 내용입니다.

    cf) https://teivah.medium.com/maps-and-memory-leaks-in-go-a85ebe6e7e69

    - map은 메모리 상에서 항상 증가하며, 절대로 감소하지 않는다. 따라서 메모리 이슈를 초래한다면, map을 re-create 한다거나, pointer를 사용하는 방식으로 처리할 수 있다.

    ```
      m := make(map[int][128]byte)

    ```

    - 위 코드로 다음의 상황을 가정해보자

      1) 빈 map을 생성하고, 

      2) 백만개의 요소를 add하고, 

      3) 이후 모든 요소를 제거하고 가비지 컬렉션이 작동되는 상황을 가정해보자.

    - 각각의 단계에서는 printAlloc이라는 utility function을 사용하여 size of heap을 출력한다.

    ```
      func main() {
	n := 1_000_000
	m := make(map[int][128]byte)
	printAlloc() // 1) output: 0mb

	for i := 0; i < n; i++ { // Adds 1 million elements
		m[i] = [128]byte{}
	}
	printAlloc() // 2) output: 461mb

	for i := 0; i < n; i++ { // Deletes 1 million elements
		delete(m, i)
	}

	runtime.GC() // Triggers a manual GC
	printAlloc() // 3) output: 293mb
	runtime.KeepAlive(m) // Keeps a reference to m so that the map isn’t collected
	}

	func printAlloc() {}
    ```

    - 위 코드에서 백만 개의 원소를 map에 넣었을 때, 461mb의 크기가 되었다가 이후, 모든 원소를 삭제하였을 때 map의 크기는 293mb가 된다. map 내에 백만 개의 요소가 있을 때보다 크기가 줄어들기는 했지만, 빈 map의 크기가 여전히 293mb로 남아있는 것을 볼 수 있다.

    - 이러한 상황이 어떻게 이루어졌는지 알기 위해서는 go에서 map의 작동방식을 알아야한다.

    - map은 모든 key 값이 고유하며 key-value 쌍의 unordered된 collection을 provides한다.

    - go 에서 map은 hash table 기반으로 만들어져 있으며, 이 data structure는 각각의 원소들이 key-value 쌍을 담고있는 bucket을 가르키는 pointer인 배열로 구성되어 있다.

      - 그림 참조

    - key-value를 담는 bucket들은 모두 고정된 크기이며, 8개의 원소를 저장할 수 있는 배열로 되어있다. 만약 bucket 에 8개를 넘어가는 원소를 저장해야할 경우(bucket overflow), go는 또 다른 8개의 원소를 담을 수 있는 bucket을 만들고 이것을 이전 것과의 link를 한다.
      
      - 그림 참조

      cf) under the hood: '실제로 어떻게 동작하고 있는가 하면'

    - go의 map은 <underline>runtime.hmap</underline> 구조체를 가리키는 pointer이다. 이 구조체는 대략 아래와 같이 생겼다. 


      ```
        type hmap struct {
           B uint8 // log_2 of # of buckets
	           // (can hold up to loadFactor * 2^B items)
	   // ...
	}
	
      ```

    - 구조체는 B 필드를 포함하여 다양한 필드를 가지고 있다. B 필드는 map 내 buckets의 갯수를 지정한다.

    - 백만개의 원소를 추가한 후에, B 의 값은 18이 된다. 이것은 2^18 = 262,144 buckets를 의미한다. 그렇다면 모든 원소 백만 개를 제거했을 때, B의 값은 얼마가 될까? 여전히 18이다. 결론적으로 map은 여전히 동일한 갯수의 buckets를 갖고 있다.

    - 이러한 이유는 map의 bucket 갯수는 줄어들 수 없다는 성질 때문이다. 따라서 map 내에 있는 원소들을 제거한다고 해서, 존재하는 bucket의 개수에 영향을 미치지 못한다; 단지 버킷 내 슬롯에 0으로 채울 뿐이다.(; 이후 한 문장이 정확한 해석인지 몰라 원문 추가합니다. it just zeroes the slots in the buckets.) <b>map은 오직 증가하거나 그리고 더 많은 bucket들을 가질 수 있다. 절대 줄어들지 않는다. </b>

    - 위의 예시에서 map의 크기가 461mb에서 293mb로 내려갔음을 봤다. 원소들이 gc에 의해 수집되었기 때문에 이다. 그러나 map 자체에는 gc가 영향을 미치지 못한다. 그리고 심지어 extra buckets의 갯수(overflow로 생성된 bucket들)는 여전히 같다.

    - 다시 처음으로 돌아와 map이 cannot shrink하다는 점이 문제가 될 상황에 대해 고려해보자. 캐시를 map[int][128]btye 짜리 map을 만들어 사용한다고 가정해보자. 이 map은 customerID 당 128 bytes를 가지고 있다. 이제 1000 명의 고객을 저장하려는 상황을 고려해보자. map 크기는 여전히 constant하게 남아 있을 것이다, 그리고 우리는 map 크기가 감소될 수 없다는 사실에 대해 걱정할 필요가 없다.

    - 그러나 1시간 동안의 데이터를 저장하고 싶다고 가정해보자. 그리고 회사에서 블프에 한 시간정도 큰 행사를 하는 상황이 왔다고 가정해보자. 아마도 수백만의 고객들이 시스템에 연결될 것이다. 블프가 며칠 지난 후에, 시스템 내의 map은 블프 최다 접속자 때와 같이 동일한 수의 buckets를 가지고 있다. 이러한 상황은 왜 메모리 내에 map의 size가 큰 감소를 하지 않고, 높은 memory consumption을 경험하는지 설명해준다.

    - 서비스를 재부팅하는 것 없이 map이 소비하는 메모리 총량을 정리하기 위해서 어떤 방법이 있을까? 첫번째로는 일정한 간격으로 현재 map의 copy본을 re-create하는 것이다. 예를 들어 한 시간 간격으로, 새로운 map을 만들고, 그 map으로 모든 원소들을  복사하고 기존의 map을 방출시켜 버리는 것이다. 이 방법의 주요 단점은 새로운 map을 copy하고 다음 garbage collection까지 짧은 기간동안 현재 메모리의 두배를 사용할 수 있다는 것이다.

    - 또 다른 방법으로는 map 타입을 배열 pointer로 바꾸는 것이다.  이것은 버킷의 수에 큰 영향을 미치지는 못하지만 각각의 bucket entry들이 128bytes 짜리 value를 가지고 있는 대신 value의 size에 대한 pointer를 가지고 있을 것이다.

      ```
   	  map[int][128]byte ---> map[int]*[128]byte
      ```

      - 그림 참조

    - 위 그림처럼, `map[int]*[128]byte` 타입은 모든 원소들을 제거한 후에 요구되는 메모리 크기는 상당히 적다. 또한 이 경우, peak time 동안에 필요로 되는 메모리의 크기도 상당히 작아 소비되고 있는 메모리를 줄이는데 최적화를 할 수 있다.

    - NOTE: 만약 key 혹은 value 가 128bytes 이상이라면, go 는 map 내 bucket에 직접적으로 저장하지 않는다. 대신 go 는 key나 value에 대한 참조를 가리키는 pointer를 저장한다.

    - <b>결론</b> 

      - 위에서 봤던 것처럼, n개의 elements를 map에 추가하고 모든 elements를 삭제하는 것은 메모리에 같은 갯수의 bucket이 남아있다는 것을 의미한다. 따라서, 이 사실을 기억해야한다, Go map은 only grow in size하고, 메모리 consumption에서도 동일하기 때문이다.

      - 자동으로 메모리 내 map 크기를 줄이는 전략은 없다. 

      - 만약 높은 메모리 소비를 유발한다면, go가 map을 re-create 하게 하거나 혹은 pointer를 사용하여 map의 크기를 최적화 시킬 수 있는지 고려해야한다.


