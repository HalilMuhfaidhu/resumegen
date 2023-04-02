const footer_input = document.querySelector(".footer-input");

footer_input.addEventListener("focus" , () =>{
  footer_input.classList.add("focus");
})

footer_input.addEventListener("blur" , () =>{
  if(footer_input.value != "") return;
  footer_input.classList.remove("focus");
})
