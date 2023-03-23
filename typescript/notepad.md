
* type 호환

  ```
    let primitiveStr: string;
    primitiveStr = 'hello'; // OK
    primitiveStr = new String("hello"); // Error, /** Type 'String' is not assinable to type 'string'. \n 'string' is a primitive,  but 'String' is a wrapper object. Prefer using 'string' when possible. */

    let objectStr: String;
    objectStr = 'hello'; // OK
    objectStr = new String('hello'); // OK
  ```
