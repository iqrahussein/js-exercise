async function fetchData(){
 try{
  console.log("Start fetching data ");

  //GET METHOD
  const respons =await fetch("https://jsonplaceholder.typicode.com/users")
  if(!respons.ok){
    throw new Error(`http error! status: ${respons.status}`);
  }
  
  const data =await respons.json();
  console.log("response data",data)
 }catch(error){
  console.error("error fetching data:",error)
 }
} 
fetchData()