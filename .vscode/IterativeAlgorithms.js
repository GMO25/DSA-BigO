//1) Sheep
const sheep = function (N) {
 
 for (let i =0; i <= N; i++){
   if (N > 0){
    console.log(`${N} Sheep jumped`)
    N = N - 1
   }
   if (N == 1){
    console.log(`${N} Sheep jumped`)
    N = N - 1
   }
   if (N == 0){
    console.log('all jumped')
   }
 }


}
//sheep(3)

//2) PowerCalculator
const powerCalc = function (base, exponent){

 let baseHolder = base;

 if (exponent < 0){
  return `exponent should be >=0`
 } 

 if (exponent == 1){
  return base * exponent
 }
 if (exponent > 1){
  for (let i=1; i < exponent; i++){
  baseHolder = baseHolder * base
  }
  return baseHolder
 }


}
//console.log(powerCalc(10,2))
//3) Reverse String
const reverseString = function (stringToReverse){

let reversed = ''
for (let i = 1; i <= stringToReverse.length; i ++){

  reversed += stringToReverse[stringToReverse.length -i]
}
return reversed

}
//console.log(reverseString('hello')) - stepize the problem 
// 4) Triangle Number calculator
const triNumber = function (N){

let result;
 for (let i =1; i <= N; i ++){
  result = N * (i + 1)
 }
return result/2
}
//console.log(triNumber(4)) -- function call

// 5) String splitter 

const splitString = function (string){

  let result = ''
  
  for(let i = 0; i< string.length; i++){
   
    if(!string[i] == '/') {
      arrayHolder[i] = `${string[i]}`
      
    }
    else {
      result += `${string[i].replace('/','","')}`
     
    }
    
  }
 return [result]
 

}
//console.log(splitString("02/20/2020"))
//6) Fibonacci
const Fib = function (N){
 if(N <= 2) {
   return 1
 }
 let phi = (1 + Math.sqrt(5)) / 2;
 let baseHolder = phi
 Math.round(Math.pow(phi,N)/Math.sqrt(5))
 for (let i=1; i < N; i++){  
  baseHolder = baseHolder * phi
  }
  return Math.round(baseHolder/Math.sqrt(5))

}
//console.log(Fib(7))
// 7) Factorial 
const factorial = function (N){

  if (N <= 1){
   return N 
  }

  let number=N;
  for(let i=N -1;i>=1;i--){
  
   number = number * i

  }
  return number
 
 }
 let N = 5;
 console.log(factorial(N))
