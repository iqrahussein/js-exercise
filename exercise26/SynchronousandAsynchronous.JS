
function delayBlocking(){
  alert("fetching user data")
  return "blocking delay complated"
}

console.log("starting blocking delay")
console.log(delayBlocking())
console.log("this msg is blocked until the delay is  complated")

function delayNonblockimg(callback){
  setTimeout(()=>{
    const user={id:22,name:"iqra"}
    callback(user)
     console.log("this msg is'n blocked and shows after 4 seconds")
  },4000)
}

console.log("before calling non blocing funtion")
delayNonblockimg(function(us){
  console.log(us)
});

console.log("after calling a blocking  function")