let temperature =prompt("Enter yor tempreture:")

if(temperature <=0){
  console.log("your temperature is "+temperature+" so it's very cold");
}
else if(temperature <=15){

  console.log("you temperature is "+temperature+" so it's cold");
}
else if(temperature <=25){
  console.log("you temperature is "+temperature+" so it's warm");
}
else{
  console.log("you temperature is "+temperature+" so it's hot")
}