function createPairs(arr) {
 for (let i = 0; i < arr.length; i++) {
     for(let j = i + 1; j < arr.length; j++) {
         console.log(arr[i] + ", " +  arr[j] );
     }
 }
}
createPairs([2,4,8])

// Two loops so its polygonial time O(n^2) 
// more operations than just linear time
