

//show and hide text input on header navbar


const magnifier = document.querySelector('#magnifier');
const textInputNavBar = document.querySelector('.hiddenSearch')

var x = true


magnifier.addEventListener('click',function(){

  if(x){
    textInputNavBar.style.width = "0px"
    textInputNavBar.style.opacity = "0"
  }
  else {
    textInputNavBar.style.width = "200px"
    textInputNavBar.style.opacity ="1"
  };
  x!=x
})


//widget image change on click and chat div show

const chatcircle = document.querySelector('#cross')
const chatbubble = document.querySelector('#bubble')
const widget = document.querySelector('.widget')

var chatrun = false

widget.addEventListener('click',function(){

  if (chatrun) {
    chatcircle.classList.toggle('hidden')
    chatbubble.classList.toggle('show')
    chatcircle.classList.toggle('show')
    chatbubble.classList.toggle('hidden')
  }
  else{
    chatcircle.classList.toggle('show')
    chatbubble.classList.toggle('hidden')
    chatcircle.classList.toggle('hidden')
    chatbubble.classList.toggle('show')
  }
  chatrun!=chatrun
})
