// * ------------------  Hoisting --------------------------------

{
   // 'function' & 'var' are hoisted (assigned a location in the memory before execute the code)
   // - var are partially hoisted  '== undefined' - function are fully hoisted.

   // function expression
   var sing2 = function () {
      console.log("azeazeaze");
   };

   // function declaration
   function sing() {
      console.log("azeazeaze");
   }

   // ! Example

   var favouriteFood = "grapes";

   var foodThoughts = function () {
      console.log("Original favourite food:" + favouriteFood); // undefined

      var favouriteFood = "sushi";

      console.log("New favourite food:" + favouriteFood); // sushi
   };

   foodThoughts();

   // in the foodThoughts function new execution context will be created.

   // ! ........
}

// * -------------------- JS is weird -----------------------

{
   function weird() {
      height = 50;
      return height;
   }
   weird(); // OK

   // ----------
   ("use strict");
   function weird() {
      height = 50;
      return height;
   }
   weird(); // referenceError height is not defined
}

// * -------------------- this -----------------------

// this is the object that the function is a property of
{
   const obj = {
      name: "kalli",
      sing() {
         return "lalala " + this.name;
      },
      singAgain() {
         return this.sing() + " !";
      },
   };

   // # Exercice -----

   const character = {
      name: "Simon",
      getCharacter() {
         return this.name;
      },
   };
   const giveMeTheCharacterNOW = character.getCharacter;
   //How Would you fix this?
   console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

   // ---------------

   const character = {
      name: "Simon",
      getCharacter() {
         return function () {
            return this.name;
         };
      },
   };
   const giveMeTheCharacterNOW = character.getCharacter();
   //How Would you fix this?
   console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

   // ---------------

   const character = {
      name: "Simon",
      getCharacter() {
         return () => this.name;
      },
   };
   const giveMeTheCharacterNOW = character.getCharacter();
   //How Would you fix this?
   console.log("?", giveMeTheCharacterNOW()); // ok

   // ---------------

   const character = {
      name: "Simon",
      getCharacter() {
         return this.name;
      },
   };
   const giveMeTheCharacterNOW = character.getCharacter.bind(character);
   //How Would you fix this?
   console.log("?", giveMeTheCharacterNOW()); // ok
}

// * ----------------- something confusing ----------

{
   const obj = {
      name: "kalli",
      sing() {
         console.log("a", this); // a { name: "", sing: f }
         var anotherFunc = function () {
            console.log("b", this); // b window
         };
         anotherFunc();
      },
   };

   obj.sing();
   // a { name: "", sing: f }
   // b window

   const obj = {
      name: "kalli",
      sing() {
         console.log("a", this); // a { name: "", sing: f }
         var anotherFunc = () => {
            console.log("b", this); // { name: "", sing: f }
         };
         anotherFunc();
      },
   };

   obj.sing();
   // a { name: "", sing: f }
   // b { name: "", sing: f }

   // --------> solution with bind()

   const obj = {
      name: "kalli",
      sing() {
         console.log("a", this); // a { name: "", sing: f }
         var anotherFunc = () => {
            console.log("b", this); // { name: "", sing: f }
         };
         return anotherFunc.bind(this);
      },
   };

   obj.sing();
   // a { name: "", sing: f }
   // b { name: "", sing: f }
}

// * ------------------- call() ---------------------------

{
   const wizard = {
      name: "Merlin",
      health: 50,
      heal(num1, num2) {
         return (this.health += num1 + num2);
      },
   };

   const archer = {
      name: "Roobin",
      health: 30,
   };

   console.log(archer); // { name: '...', health: 30 }
   wizard.heal.call(archer, 50, 100);
   console.log(archer); // { name: '...', health: 180 }
}

// * ------------------- apply() ---------------------------

console.log(archer); // { name: '...', health: 30 }
wizard.heal.apply(archer, [50, 100]);
console.log(archer); // { name: '...', health: 180 }

// * ------------------- bind() ---------------------------

console.log(archer); // { name: '...', health: 30 }
const healArcher = wizard.heal.bind(archer, 50, 100);
healArcher();
console.log(archer); // { name: '...', health: 180 }

// - Bind and currying

function multiple(a, b) {
   return a * b;
}

let multipleByTwo = multiple.bind(this, 2);

multipleByTwo(4); // 8

// - NOTE:
// call() & apply() are useful for borrowing(اقتراض) methods from an object

// ! --------------------------------------------------------

// Context vs Scope
/**
 * Scope means what is the variable access of a function when it is invoked, what is in variable enviromment.
 * scope refers to the visibility of variables.
 *
 * Context is more about object based, context says what's the value of this keyword.
 * Context is most often determined by how a function is invoked
 *
 */
