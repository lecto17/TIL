interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}


function fetchProducts(): Promise<Product[]> {
    
}


type ShoppingItem = Pick<Product, "id" | "name" | "price">;

// 간혹 Product의 detail 화면을 띄울 때, 위 인터페이스에 선언된 속성들 중 일부만을 출력할 수도 있다.
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

/** Omit 타입 */
// Pick과는 정반대로 Product 타입에서 id와 name을 생략한 다른 속성들은 사용하겠다는 것.
const AmbigousProduct: Omit<Product, "id" | "name"> = {
    price: 3000,
    brand: "no-brand",
    stock: 150
};