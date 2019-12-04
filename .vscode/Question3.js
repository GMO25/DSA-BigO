function areYouHere(arr1, arr2) {
 for (let i = 0; i < arr1.length; i++) {
     const el1 = arr1[i];
     for (let j = 0; j < arr2.length; j++) {
         const el2 = arr2[j];
         if (el1 === el2) return true;
     }
 }
 return false;
}

// There are two level of loops so therefore its a Polynomial time O(n^k) || O(n^2)

