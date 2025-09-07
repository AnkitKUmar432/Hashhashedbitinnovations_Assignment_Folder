// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSum(n) {
    while (n >= 9) {
        console.log("testing");
        
        let sum =0;
        
        let digits = n.toString().split('');
        for(let d of digits){
            sum +=parseInt(d)
        }
        n = sum;
    }
        return n;

}
 console.log(repeatedSum(605));
 
//  6 + 0 + 5 => n=11
//1+1 => n=2
//return 2

// function repeatedNum(n){
//     if(n<10) return n;
//     let sum = n.toString().split('').reduce((acc, curr)=> acc + parseInt(curr),0)
//     return repeatedNum(sum)
// }
// const result = repeatedNum(457)
// console.log(result);;
