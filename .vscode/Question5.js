function naiveSearch(array, item) {
 for (let i = 0; i < array.length; i++) {
     if (array[i] === item) {
         return console.log(i);
     }
 }
}

naiveSearch([2,3,566,621,16],16)
// Linear time - number of operations increase with array length(input size) O(n)
