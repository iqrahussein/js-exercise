const navbar =document.querySelector(".navbar");
const toggle_button =document.querySelector(".toggle_button")

toggle_button.addEventListener("click", function(){
  navbar.classList.toggle("active")
})