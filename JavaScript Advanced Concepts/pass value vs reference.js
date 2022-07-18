// * ------- by value ---------

var a = 4;
var b = a;
a++;
console.log(a); //5
console.log(b); //4

// * ------- by reference ---------

let obj1 = { name: "aze", pass: "123" };
let obj2 = obj1;

obj2.pass = "new";
console.log(obj1); // {name: 'aze', pass: 'new'}
console.log(obj2); // {name: 'aze', pass: 'new'}

// * ------- by value ---------

let obj = { name: "aze", pass: "123" };
let clone = obj;
let clone2 = Object.assign({}, obj);
let clone3 = { ...obj };

let superClone = JSON.parse(JSON.stringify(obj)); // if you have object inside object and you change the property of the child object.

obj.pass = "new";
console.log(obj); // {name: 'aze', pass: 'new'}
console.log(clone); // {name: 'aze', pass: 'new'}
console.log(clone2); // {name: 'aze', pass: '123'}
console.log(clone3); // {name: 'aze', pass: '123'}
