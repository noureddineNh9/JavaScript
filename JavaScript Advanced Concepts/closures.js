//****** closures and memory
/*
function getDataByIndex(index) {
   const data = new Array(1000).fill("something !!");
   console.log("array created !");
   return data[index];
}

getDataByIndex(343);
getDataByIndex(343);
getDataByIndex(343);

const callSecondFunction = getDataByIndex2();

callFunction(567);
callFunction(567);
callFunction(567);

function getDataByIndex2() {
   const data = new Array(1000).fill("something !!");
   console.log("array created 2 !");
   return function (index) {
      return data[index];
   };
}
*/
//****** closures and Encapsulation
/*
const makeNuclearButton = () => {
   let timeWithoutDestruction = 0;
   const passTime = () => timeWithoutDestruction++;
   const totalPeaceTime = () => timeWithoutDestruction;
   const lanch = () => {
      timeWithoutDestruction = 0;
      return "BOOOOOM !";
   };
   setInterval(passTime, 1000);

   return {
      totalPeaceTime,
      lanch,
   };
};

const obj = makeNuclearButton();

console.log(obj.totalPeaceTime());
console.log(obj.lanch());
*/

//** exercice */
/*
let view;
function initialize() {
   view = "updated !";
   console.log("view have been set !");
}

initialize();
initialize();
initialize();
*/
//** solution
/*
let view;
function initialize() {
   let called = 0;
   return function () {
      if (called) {
         return;
      } else {
         view = "updated !";
         called = 1;
         console.log("view have been set !");
      }
   };
}

const initializeOnce = initialize();

initializeOnce();
initializeOnce();
initializeOnce();
const initializeOnce2 = initialize();
initializeOnce2();
*/

// ***** exercice *****

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//    setTimeout(function () {
//       console.log("I am at index " + i);
//    }, 1000);
// }

// ***** Prototypel Inheritance *****

// let dragon = {
//    name: "Tanya",
//    fire: true,
//    fight() {
//       return 5;
//    },
//    sing() {
//       if (this.fire) {
//          console.log(`I am ${this.name}, the breather of fire`);
//       }
//    },
// };
// let lizard = {
//    name: "Kiki",
//    fight() {
//       return 1;
//    },
// };
// dragon.sing();

// // bad for memory
// lizard.__proto__ = dragon;

// lizard.sing();

// ************ without using __proto__ ********

let human = {
   mortal: true,
};

let student = Object.create(human);

student.age = 23;

console.log(student.mortal);
