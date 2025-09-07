// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    let words = paragraph.trim().split(" ");
    let count = 0;
    for (let w of words) {
        if (w == "" || w == "," || w == "." || w == "!" || w == "?" || w == ";" || w == ":" || w === typeof (Number)) {
            count--;
        }else{
            console.log(w);
            
        }
        count++;
    }
    return count;
}
console.log(countWords("Hellow , my"));
console.log(countWords("Hellow , my is ankit kumar. I am from delhi"));
