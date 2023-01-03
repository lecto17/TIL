[ memory leak of map ]

  * 다음 블로그를 참조하여 정리한 내용입니다.

    - https://teivah.medium.com/maps-and-memory-leaks-in-go-a85ebe6e7e69

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

    - key-value를 담는 bucket들은 모두 고정된 크기이며, 8개의 원소를 저장할 수 있는 배열로 되어있다. 만약 bucket 사이즈를 넘어가는 원소를 저장해야할 경우(bucket overflow), go는 또 다른 8개의 원소를 담을 수 있는 bucket을 만들고 이전 것과의 link를 한다.
      
      - 그림 참조

    - 



