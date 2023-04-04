//there are 3 types of functions in javscript

//Normal function
//function definition

// function function_name(parameter1,parameter2){
//     statement1;
//     statement2;
// }

//Invoking a function
//function_name(parameter1,parameter2)

function add(a,b){
    return a+b
}
let ans = add(5,6);
console.log(ans)

//functions are treated as first class citizen in javscript
//functions can be returned
//functions can  be passed as parameters/argument

function calculator(str,a,b){
    if(str="add"){
        return function add(){   //we can return the whole function in javascript
            console.log(a+b);
        }
    }
}

let returnedfunc = calculator("add",4,5); //here the returnedfunc becomes the function"it doesn't store the values from calculator function instead it stores the whole add function in it"
console.log("returned func is "+ returnedfunc);
returnedfunc(); //this is called function expression  //so when we call this variable we are just calling the add function

//Let's just take another example
let arr = function abcd(){         //arr will store the whole function definition of abcd
    console.log("this is a function expression")
}
arr(); //so here this will work
//abcd(); // but this will give "abcd is not defined" error

//lets talk about IIFE-> Immediately invoke function experession

let addIIFE = (function addd(a,b){
    console.log(a+b);
})(20,30);
//console.log(addIIFE);
