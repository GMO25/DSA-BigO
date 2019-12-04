function findRandomElement(arr) {
 return console.log(arr[Math.floor(Math.random() * arr.length)]);
}
findRandomElement([2,3,45,5,10])

// This is just a singular random element - so its constant time 
//O(1) - no matter the size of the input it takes the same amount of time to complete

