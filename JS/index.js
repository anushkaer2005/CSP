// ->Javascript is a synchronous and single-threaded language (it means one line of code at a time).
console.log('Hello')



// ->Primitive DataType - String, Integer, Boolean, Null, Undefined
// ->Non-Primitive DataType - Object, Array, Function and Symbol

// ->let, var, const
var a=16;
console.log(a);



// ->Difference between let var and const
var b;
b=30;
var b;
b=40;
console.log(b);



let c=20; //declaration
c=30; //assignment
// let a; //re-declaration does not work with let
console.log(c);



const d=50; //declaration and assignment
// const a; //declaration does not work with const
// a=60; //assignment does not work with const
// const a=70; //re-declaration does not work with const
console.log(d);



let realName= "Anushka"; //String
let othername= realName;
othername= "Anu";
console.log(realName);
console.log(othername);



// Primitive Data Types store their values into Stack Memory
// Non-Primitive Data Types store their values into Heap Memory
let arr = [20,'Anushka',true,null,undefined]; //Array
arr[1] = 'Anu'; //Modifying array element
console.log(arr);

let abc = [7,'Chunmun',true,null,undefined]; //Array
let newArr = abc; //Reference Copy
newArr[1] = 'Chun'; //Modifying array element
console.log(abc);


// loop through Arrays
let arr1 = [10,20,30,40,50];
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}


// Function Declaration
function user(){
    let x= 1;
    let y= 2;
    console.log(x+y);
}
user();


//better way to write function
const user1 = function(){
    let p= 5;
    let q= 10;
    console.log(p+q);
}
user1();

// Arrow Function. When EcmaScript 6 was introduced.
const user2 = ()=>{
    let m= 3;
    let n= 6;
    console.log(m-n);
}
user2();


//HDF (Higher Order Function)
function g(x){
    console.log('Inside G');
    x();
}
function h(){
    console.log('Inside H');
}
g(h);


// Lexical Scoping
function outer(){
    const i= 10;
    // console.log(i+j);  // Error: j is not defined
    function inner(){
        const j= 20;
        console.log(i+j);
    }
    inner();
}
outer();

// The function which always remembers the scope in which it was created is called Closure
