

//show and hide text input on header navbar


const magnifier = document.querySelector('#magnifier');
const textInputNavBar = document.querySelector('.hiddenSearch')

var x = true


magnifier.addEventListener('click',function(){

  if(x){
    textInputNavBar.style.width = "200px"
    textInputNavBar.style.opacity ="1"
  }
  else {
    textInputNavBar.style.width = "0px"
    textInputNavBar.style.opacity = "0"
  };
  x=!x
})
