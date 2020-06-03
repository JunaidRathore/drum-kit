for(var i=0;i<document.querySelectorAll(".p").length;i++)
{
  document.querySelectorAll(".p")[i].addEventListener("click",function(){
    var value=this.innerHTML;
    makeSound(value);
    addAnimaion(value);
})
}
document.addEventListener("keypress" , function(event){
  makeSound(event.key);
  addAnimaion(event.key);
})

function makeSound(key)
{
  switch(key)
  {
  case "w":
  case "W":
  var tom1=new Audio("tom-1.mp3");
  tom1.play();
  break;
  case "a":
  case "A":
  var tom2=new Audio("tom-2.mp3");
  tom2.play();
  break;
  case "s":
  case "S":
  var tom3=new Audio("tom-3.mp3");
  tom3.play();
  break;
  case "d":
  case "D":
  var tom4=new Audio("tom-4.mp3");
  tom4.play();
  break;
  case "j":
  case "J":
  var crash=new Audio("crash.mp3");
  crash.play();
  break;
  case "K":
  case "k":
  var kick=new Audio("kick-bass.mp3");
  kick.play();
  break;
  case "l":
  case "L":
  var snare=new Audio("snare.mp3");
  snare.play();
  break;
  }
}

function addAnimaion(currentkey){
  var button=document.querySelector("."+ currentkey);
 button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");},100)
}
