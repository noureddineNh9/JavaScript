
// * ------------------  Hoisting --------------------------------
// 'function' & 'var' are hoisted (assigned a location in the memory before execute the code)
// - var are partially hoisted  '== undefined' - function are fully hoisted.

{
    // function expression
    var sing2 = function(){
        console.log("azeazeaze");
    }

    // function declaration
    function sing(){
        console.log("azeazeaze");
    }


    // ! Example

    var favouriteFood = "grapes";

    var foodThoughts = function(){
        console.log('Original favourite food:' + favouriteFood); // undefined

        var favouriteFood = "sushi";

        console.log('New favourite food:' + favouriteFood); // sushi 
    }

    foodThoughts();

    // in the foodThoughts function new execution context will be created.

    // ! ........
}

// * -------------------- JS is weird -----------------------

{    
    function weird(){
        height = 50;
        return height;
    }
    weird(); // OK

    // ----------
    'use strict'
    function weird(){
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
            return 'lalala ' + this.name;
        },
        singAgain() {
            return this.sing() + ' !';
        }
    }
}

// ----------------- something confusing ----------

{
    const obj = {
        name: "kalli",
        sing() {
            console.log('a', this); // a { name: "", sing: f }
            var anotherFunc = function(){
                console.log('b', this); // b window
            }
            anotherFunc();
        }
    }

    obj.sing();
    // a { name: "", sing: f }
    // b window


    
    const obj = {
        name: "kalli",
        sing() {
            console.log('a', this); // a { name: "", sing: f }
            var anotherFunc = () => {
                console.log('b', this); // { name: "", sing: f }
            }
            anotherFunc();
        }
    }

    obj.sing();
    // a { name: "", sing: f }
    // b { name: "", sing: f }

}