
function fetchingData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const succes=true;
       if(succes){
        resolve({id:333,name:"iqra"})
       }
       else{
        reject("failed to fetching user data")
       }
    },2000);
  });
}

fetchingData()
.then(user=>{console.log("user data",user)})
.catch(err=>{console.log("Error",err)})