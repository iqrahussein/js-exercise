let num1=[1,2,3,4];

let num2=[...num1,5,6,7,8];

console.log(`combination numbers ${num2}`)


const multiply = function(...number){
  return number.reduce((total,num)=>total*num,1)
}

console.log(multiply(10,20,10))