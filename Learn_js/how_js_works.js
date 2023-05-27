var num =5;
function cube(num){
    var res = num*num*num;
    return res;
}
let cube1 = cube(num);
let cube2 = cube(10);
let cube3 = cube();
console.log(cube1);
console.log(cube2);
console.log(cube3);