function doubleArrayValues(array) {
 for (let i = 0; i < array.length; i++) {
     array[i] *= 2;
     
 }
 return console.log(array);
}

doubleArrayValues([2,4,8,14,15,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])

// Linear time O(n) because the number of operations/loops is proportional to input size
