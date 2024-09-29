let display = document.querySelector('.input'); 
const blackButtons = document.querySelectorAll('.black-button'); 
blackButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const buttonValue = button.textContent.trim(); 
    if (display.value === '0') {
      display.value = buttonValue; 
    } else {
      display.value += buttonValue; 
    }
  });
});
document.getElementById("clear").addEventListener('click',function(){
  display.value = "0";
})


document.querySelector(".orange-button").addEventListener("click",function(){
  this.classList.toggle("active");
})
let clicked = false;
document.querySelector(".orange-button").addEventListener('click',function(){
  if (!clicked){
    this.style.backgroundColor = "white";
    this.style.color = "orange";
    clicked = true;
  }
  else{
    this.style.backgroundColor = "orange";
    this.style.color = "white";
    clicked = false;
  }
})



