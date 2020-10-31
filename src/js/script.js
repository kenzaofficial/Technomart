var link=document.querySelector(".main-goods__buy-btn-hover"); 
var popup = document.querySelector(".modal-basket");
var popup_close = document.querySelector(".modal-basket__close");




link.addEventListener("click", function(event){
event.preventDefault();
popup.classList.add("modal-content-show");
});


popup_close.addEventListener("click", function(){
   popup.classList.remove("modal-content-show");
});










