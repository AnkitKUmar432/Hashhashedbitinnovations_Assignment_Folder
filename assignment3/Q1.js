// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

let statesNames = ["Delhi","Punjab","Haryana","Rajasthan","Goa","Bihar","Uttar Pradesh","Sikkim","Andhra Pradesh","Odisha"];
let RemovedVowels = statesNames.filter(state=>{return ! /^[AEIOUaeiou]/i.test(state);

});
console.log(RemovedVowels);

// console.log("--------------------");



// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

// let str = 'I love my India';
// let reverseStr = str.split(" ").reverse().join(" ");
// console.log(reverseStr);
// console.log("--------------------");






// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';
let arr1 =  "ONES";
let arr = string.split("");
arr.splice(3,0,...arr1)
let resultPrint = arr.join("")
console.log(resultPrint);
console.log("--------------------");





// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


let str = "This is a normal string";

let vowels = "aeiouAEIOU";
let vowelCount =0;
let consonantCount = 0;

for(let i=0; i< str.length; i++){
    let ch = str[i];//extract each character
    if(/[a-zA-Z]/.test(ch)){
        if(vowels.includes(ch)){
            vowelCount++;
        }else{
            consonantCount++;
        }
    }
}

console.log("Vowels: "+vowelCount);
console.log("Consonants: "+consonantCount);
console.log("--------------------");





// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentance, wrong, correct){
    return sentance.replace(wrong, correct)
}
let sentance = "i am learning javasc.";
let result = correctfn(sentance,"javasc","javascript");
console.log("Before: ",sentance);
console.log("After: ",result);

console.log("--------------------");





// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

let inputArr = [1,2,3,9,10,7,5,4,3];

let arrayFilter = inputArr.filter(num=>num>5)
console.log(arrayFilter);
console.log("--------------------");
