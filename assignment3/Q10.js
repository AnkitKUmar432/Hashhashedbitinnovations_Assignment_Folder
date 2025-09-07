// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH


function demo(words){
    let w = words.trim().split("").reverse().join("");
    return w;
}
console.log(demo("Hello"));
