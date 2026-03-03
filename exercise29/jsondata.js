async function fetchingData() {
  console.log("Starting fetching json data");
  const respons=await fetch("data.json")
  const data = await respons.json();
  console.log("fetching json data ",data)
  
}

fetchingData();

console.log("this msg shows immediatly is not blocking data ")