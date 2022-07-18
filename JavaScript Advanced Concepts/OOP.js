// - constructor function
function Elf(name, weapon) {
   this.name = name;
   this.weapon = weapon;
}

Elf.prototype.attack = function () {
   return "attack with " + this.weapon;
};

const sam = new Elf("sam", "fire");

console.log(sam.attack());

/*
* In Java, there are classes, and instances, as separate concepts. In order to do inheritance, you have to use the base class to create a new class, which can then be used to produce derived instances.

* Like Java, JavaScript is also an object oriented language, but JavaScript does not use classes.
* In JavaScript you don't define classes and create objects from these classes. JavaScript is prototype based, not class based. To do inheritance, you can use any object instance as a prototype.


> Pillars of OOP
- Clear and Understandable
- Easy to extend
- Easy to maintain
- Memory Efficient
- DRY (repeting)

*/
