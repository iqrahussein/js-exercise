const header=document.querySelector("#header");
console.log(header)

const text=document.querySelector(".text");
console.log(text)

function changeContant(){
  header.textContent="Welcome to the DOM"
}

function innerHtml(){
  text.innerHTML="change the inner  <strong>HTML</strong>"
}
