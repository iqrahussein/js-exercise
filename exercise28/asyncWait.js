
function fetchUserdata(){
  return new Promise((resolve,rejact)=>{
    setTimeout(() => {
      const user =false;
      if(user){
        resolve({id:222,name:"hassan"})
      }else{
        rejact("failed to fetch user data")
      }
    }, 2000);
  })
}


// fetchUserdata()
// .then((data)=>console.log("user data",data))
// .catch((err)=>console.log(err))

async function displayUserdata() {
  try{
   const user= await fetchUserdata();
    console.log("user data",user)
  } catch(err){
    console.log(err)
  }
 
}

displayUserdata();