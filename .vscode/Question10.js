function isWhat(n) {
 if (n < 2 || n % 1 != 0) { // 202 < 2 || 202 % 1 != 0 - console.log(false) rare cases
     return console.log(false); // false if less than 2 or leaves a remainder
 }
 for (let i = 2; i < n; ++i) { // ... loop n amount of times start at 2 and increase by 1 for each up iteration up to n
     if (n % i == 0) return console.log(false); // if n is divisible by i return false 
     // starts at 2 - 8 % 2 == 0 ? Yes - false 
 }
 return console.log(true); 
}

isWhat(7)

//Prime numbers can only be divided by itself or 1 
// Linear time O(n) - increases in operations per size of number
