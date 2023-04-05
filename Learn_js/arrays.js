// Arrays-> Arrays are the collection of elements 
let arr =["car","bike","truck",1,2,3,true];
// in js we can store values of multiple data types 
console.log(arr);  //this will print the whole array
//in  js we don't need to iterate through the whole array to print it


// accessing elemnts of the array
console.log(arr[0]);
console.log(arr[5]);

//adding elemts in an array
arr[7]="hello";
console.log(arr);

//methods of an array

// 1. pop method -> will remove the last elements of the array
arr.pop();
console.log("after popping");
console.log(arr);

// 2. push method-> will push a new element at the end of the array
arr.push("world");
console.log("after pushing an element");
console.log(arr);

// 3. unshift method-> will adds elemets at the starting of the array
arr.unshift("volvo")
arr.unshift("GTR")
console.log("after unshifting");
console.log(arr);

// 4. shift method-> will remove the first elemnt from the arrays at 0th index
arr.shift();
console.log("after shift method");
console.log(arr);

//5. array length-> to check array length
console.log(arr.length);

// 2d Arrays

let array2d = [[1,2,3],[4,5,6],[7,8,9]]
console.log(array2d);
console.table(array2d); // using this we can print the 2d array in tabular form or we can say matrix form

// to access elemts in a 2d array
console.log(array2d[2][1]); //2nd row and 1st column elemnt