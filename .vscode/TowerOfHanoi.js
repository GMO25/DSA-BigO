const towerOfHanoi = function (N,Beg,Aux,End){

if (N == 1){
 return console.log(`${Beg}: to ${End}`) // 
}
else {
 towerOfHanoi(N-1,Beg,End,Aux) // 2,'A','C','B' -> 1 A,B,C -> A to C
 towerOfHanoi(1,Beg,Aux,End) // 3 A B C 
 towerOfHanoi(N-1, Aux, Beg, End)
}

}

towerOfHanoi(3,'A','B','C')

//1) How do the rods look like for 5 disks after 7 recursive calls 
// -- A: to C -- 
// A                   B                    C
//
//
//                                          --
//--------                                 ----
//----------                              ------     

//2) How many moves are required for 3,4,5 disks 2^n -1  
// 3 = 7 
// 4 = 15
// 5 = 31 

// 3) Run time for N disks : 
// 1) 3 = 0.288 seconds
// 2) 4 = 0.295 seconds 
// 3) 5 = 0.333 seconds
// in terms of big O notation its Exponential O (2^n) as described above 