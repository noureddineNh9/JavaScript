// IMMEDIATELY INVOKED FUNCTION EXPRESSION

var script1 = (function (a){
    return {
        x: a
    }
})(3)

/// normale

function f(a){
    return {
        x: a
    }
}

var script1 = f(3);