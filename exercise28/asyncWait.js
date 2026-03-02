
function fetchUserdata(){
  return new Promise((resolve,rejact)=>{
    setTimeout(() => {
      const user =true;
      if(user){
        resolve({id:222,name:"cabdi"})
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
    const user= await fetchUserdata();
    console.log("user data",user)
}

displayUserdata();