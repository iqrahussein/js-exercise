function changeImage(){
  const img =document.querySelector('#img')
  const text=document.querySelector("#text")
  const url =prompt('Enter The url ')


  img.setAttribute('src',url)

  const border=prompt("Enter a img border ")
  img.style.border=` ${border}px solid blue`;


  const height=prompt("Enter a img height in (pixels)");
  img.style.height=`${height}px`

  const width=prompt("Enter a img width in (pixels)")
  img.style.width=`${width}px`;

  const borderRadius=prompt("Enter a border radius")
  img.style.borderRadius=`${borderRadius}%`

  img.style.padding = "10px";
  img.style.backgroundColor = '#cfc2dc';



  

}