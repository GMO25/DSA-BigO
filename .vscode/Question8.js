function efficientSearch(array, item) {
 let minIndex = 0;
 let maxIndex = array.length - 1; // input size 
 let currentIndex;
 let currentElement;

 while (minIndex <= maxIndex) { // 0 < input size 2) min is less than max still 3) min is less than max still
     currentIndex = Math.floor((minIndex + maxIndex) / 2); // 0 + 10/2 = 5 // 0 + 4/2 = 2 // 3 + 4/2 = 3
     currentElement = array[currentIndex]; // array[5] // array[2] // array[3]

     if (currentElement < item) { // if array[5] - value < 21 - N // is array[2] < 21 Y 3) Yes
         minIndex = currentIndex + 1; // min = 6 // min = 3 // min = 4
     }
     else if (currentElement > item) { // if array[5] > 21 - Y
         maxIndex = currentIndex - 1; // max = 4
     }
     else {
         return console.log(currentIndex);
     }
 }
 return -1;
}

efficientSearch([2,20,5,9,21,50,30,50,60,70,80],21)

// The number of operations in this algorithm are not directly proportional to input 
// Its logarithmic because its cutting the time needed - in the following 10 inputs 
// the amount of operations were 3 
// O (log(n))