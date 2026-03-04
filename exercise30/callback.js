function operate (a,b,call){
  return call(a,b)
}

function add(a,b){
  return a+b
}
function sub (a,b){
  return a-b;
}

function multibly (a,b){
  return a*b;
}

function dvide (a,b){
  return a/b;
}
console.log("Addition",operate(2,8,add))

console.log("subtract",operate(33,7,sub))

console.log("multiply",operate(2,8,multibly))

console.log("divide",operate(33,7,dvide))