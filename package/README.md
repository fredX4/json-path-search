# json-path-search
A simple utility for traversing a JSON object using relative paths.

Sample Code Snippet:
```javascript
const search = require('json-path-search');
const object = {
    key1: {
        key2: {
            key3: 'value'
        }
    }
};

console.log(search(object, "/")); // { key1: { key2: { key3: 'value' } } }
console.log(search(object, "/key1/key2")); // { key3: 'value' }
console.log(search(object, "/key1/key2/key3")); // 'value'
console.log(search(object, "/key1/key2/errorKey")); // undefined
console.log(search(object, "/key1/key2/errorKey1/errorKey2")); // undefined
```
