// const { createElement } = require("react");

// const { createElement } = require("react");

const color =document.querySelector("#color");
const colorprev =document.querySelector("#colorprev");
const colorHistory =document.querySelector("#colorHistory");
const msg =document.querySelector("#msg")
const removeHistory=document.querySelector("#removeHistory")


color.addEventListener('input',function(){
  const selectedColor=color.value;
  colorprev.style.backgroundColor = selectedColor;
  addColorHistory(selectedColor);
})

function addColorHistory(color){
  const li =document.createElement('ul')
  li.textContent =color;
  li.style.color=color;
  colorHistory.appendChild(li);
}

removeHistory.addEventListener('click',function(){
   if(colorHistory.lastChild){
    colorHistory.removeChild(colorHistory.lastChild)
  }
  else{
    alert('list is ended')
  }
})


// function removeHistory2(){
//   if(colorHistory.lastChild){
//     colorHistory.removeChild(colorHistory.lastChild)
//   }
//   else{
//     alert('list is ended')
//   }
// }