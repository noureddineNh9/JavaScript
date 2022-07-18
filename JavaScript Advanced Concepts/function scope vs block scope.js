// function scope --> 'var'

// block scope --> 'let & const'

if(true){
    var a = 1;
    let b = 2;
    const c = 3;
}

a; // OK
b; // is not defined
c; // is not defined

// ----------------

function f(){
    var a = 1;
    let b = 2;
    const c = 3;
}

a; // is not defined
b; // is not defined
c; // is not defined
