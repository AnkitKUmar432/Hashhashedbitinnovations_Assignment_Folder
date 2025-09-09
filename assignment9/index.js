
// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?


// function scopeExample() {
//     if (true) {
//         var x = " i am var";
//         let y = " i am let";
//         const z = " i am const";
//         console.log("Inside block");
//         console.log(x);//work
//         console.log(y);//work
//         console.log(z);//work

//     }
//     console.log("/n Outside block");
//     console.log(x); //Work --> var is function scoped
//     // console.log(y); // Error: y is not defined
//     // console.log(z); // Error: z is not defined
      
// }

// scopeExample();







// Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

// let fruits = ["mango","orange","apple","banana","graphes"];
// let Fruit = fruits.slice(1,2); // slice return subArray
// console.log(Fruit);





// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

// let fruits = ["mango","orange","apple","banana","graphes"];

// function arrayCurd(array,add){
//     array.push(add);
//     console.log("Element added: ",array);
//     array.pop();
//     console.log("Removed Element: ",array);

// }
// let result = arrayCurd(fruits,"papaya");
// console.log("Final array: ",result);






// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

// let arrayNumber1 = [5,10,9,32,20,13,18,19];

// // let numberSquare = [];
// // arrayNumber.map((data)=>{
// //     console.log(data*data);
// //     numberSquare.push(data*data)
// // })

// // Or

// let numberSquare = arrayNumber1.map((data)=>data*data)
// console.log(numberSquare);





// Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

// const arrayNumber1 = [5,10,9,32,20,13,18,19,7,30];
// let evenNumber = arrayNumber1.filter((data)=> data % 2 !== 0);
// console.log(evenNumber);





// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

// const person = {
//     name: "Ankit",
//     age: 22,
//     occupation: "Software Developer"
// }

// function geetingFn() {
//     console.log(`Hello, my name is ${person.name}. I am ${person.age} years old. I work as a ${person.occupation}`);
// }
// geetingFn();





// Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

// let rectangle = {
//     width:500,
//     height:500
// }
// function calculateAres(object){

//     return object.width * object.height;
// }
// let result = calculateAres(rectangle);
// console.log("Area of rectangle: ",result);





// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

// const person = {
//     name: "Ankit",
//     age: 22,
//     occupation: "Software Developer"
// }

// function objKeys (obj){
// return Object.keys(obj);
// }
// console.log(objKeys(person));






// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object

// const person = {
//     name: "Ankit",
//     age: 22,
//     occupation: "Software Developer"
// };
// const data = {
//     state: "Haryana",
//     dist: 25,
//     company: 40000
// };

// function mergeObject(obj1, obj2) {
//     return Object.assign({}, obj1, obj2); 
// }
// let result = mergeObject(person, data)
// console.log(result);





// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

 const arrayNumber = [5,10,30,50,1];
 let calculateNum = arrayNumber.reduce((acc,curr)=>acc+curr,0);
 console.log(calculateNum);
 

