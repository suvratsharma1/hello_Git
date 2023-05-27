console.log(a);                   //undefined would be printed coz memory allocated acc to execuion context
greet();                          //hello world would be printed coz function already stored in memmory
console.log(greet);
var a =10;
function greet(){
    console.log("Hello world");
}
console.log(a);                   //this would print 10 cause the valyue is allocated now

// hoisting is a phenomenon in js where you can access the variable and function even before intialization
// we can acess it without any errors

//functions

var x = 1;
z();                // due to hoisting this will return 10
y();                // and this will return 100
console.log(x);     // and this will return 1
function z(){
    var x =10;
    console.log(x);
}
function y(){
    var x = 100;
    console.log(x);
}