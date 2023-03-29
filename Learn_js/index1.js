var str;
//backslash n "\n" for changing the line 
str ="hello how are you \n i am fine"  //to print in next line
console.log(str)
//or we can also do this
var str1;
//we can print multi line using backticks
str1 =`thats another way to print 
 without using backslash n`
console.log(str1)

// learning print statement
var a=200;
// it will compute whats inside the box first
console.log(`half of ${a} is ${a/2}`) // this is container like %d in c language
// ${a} is dynamic value container it computes the value first


//var has some problem
var d=100;
console.log(d);

var d= 'helloworld';
console.log(d);
//because re-declaration is allowed here, so to overcome this problem
//let was introduced

let e = 100;
console.log(e)
e="hello world";
console.log(e);
console.log(typeof e);
//here in "let" redeclaration is not allowed it will lead into a syntax errors
//but re-intializaition is allowed here

//const keyword
const f=5;
console.log(f);
f=6; // this will lead into  "Assignment to constant variable." error
const f ="hi"; // this will lead into "Identifier 'f' has already been declared" error

//so here we learned that const variable doesn't allow either re-declaration
//or re-intialization