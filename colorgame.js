var squares=document.querySelectorAll(".square");
var colors = generaterandomcolors(6);
var pickedColor = randomcolor(6);
var messageDisplay=document.getElementById("gameStatus");
var display = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resbut = document.querySelector("#res");
var easbtn = document.querySelector("#eas");
var hrdbtn = document.querySelector("#har");
var numberofsq = 6;

easbtn.addEventListener("click", function(){
  easbtn.classList.add("selected");
  hrdbtn.classList.remove("selected");
  numberofsq = 3;
  colors = generaterandomcolors(numberofsq);
  pickedColor = randomcolor(numberofsq);
  display.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }

});

hrdbtn.addEventListener("click", function(){
  numberofsq = 6;
  hrdbtn.classList.add("selected");
  easbtn.classList.remove("selected");
  colors = generaterandomcolors(numberofsq);
  pickedColor = randomcolor(numberofsq);
  display.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
  }
});

resbut.addEventListener("click", function(){
  colors=generaterandomcolors(numberofsq);
  pickedColor=randomcolor(numberofsq);
  display.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New colors!"
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor= steelblue;
  resbut.textContent="New colors";
})
display.textContent = pickedColor;
//squares.forEach(function(thi){
//  thi.style.backgroundColor=colors[i];
//  i++;
//});
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor=this.style.backgroundColor;
    console.log(clickedColor,pickedColor)
    if(clickedColor === pickedColor){
      h1.style.backgroundColor=clickedColor;
      resbut.textContent="Play Again";
      for(var j=0; j< squares.length; j++){
        squares[j].style.backgroundColor = pickedColor;
      }
      messageDisplay.textContent = "Correct option";
    }
    else{
      this.style.backgroundColor = "#212211";
      messageDisplay.textContent = "Try again!";
    }
  });
}

function generaterandomcolors(num){
  //make an array
  var arr=[];
  for(var i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
    //to pick r,g,b from 0 to 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " +  b + ")";
}
function randomcolor(n){
  var rand = Math.floor(Math.random() * n);
  return colors[rand];
}
