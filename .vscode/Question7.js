function compute(num) {
 let result = [];
 for (let i = 1; i <= num; i++) {

     if (i === 1) {
         result.push(0);
     }
     else if (i == 2) {
         result.push(1);
     }
     else {
         result.push(result[i - 2] + result[i - 3]);
     }
 }
 return console.log(result);
}

compute(10)
// Its the fibonacci sequence, the nth sequence number is calculated (so input 10 results in the sequence up to 34)
// Only one input so its constant time O(1)
