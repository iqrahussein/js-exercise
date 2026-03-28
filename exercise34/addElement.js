const list=document.querySelector('#list');

function addElement(){
  const newelement =document.createElement('ol')
  newelement.textContent='new item'

  list.appendChild(newelement)
}

function removeElement(){
  if(list.lastChild){
   list.removeChild(list.lastChild)
  }

  else{
    alert("list is ended")
  }
}