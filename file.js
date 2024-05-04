window.onload=()=>{

let allBoxes = document.querySelectorAll(".box")

 let boxOne = document.querySelector(".box.one");
 let boxTwo = document.querySelector(".box.two"); 
 let boxThree= document.querySelector(".box.three");
 let boxFour= document.querySelector(".box.four");
 let boxFive = document.querySelector(".box.five");
let boxSix = document.querySelector(".box.six");




let randomColor=()=>{
let random = Math.floor(Math.random() * 5)
let array = ["red","blue","yellow","green","coral"]
    
    return array[random]
}


let colorArray = [];
   
  allBoxes.forEach((box)=>{
  box.addEventListener("click",()=>{
  if(colorArray.length >= 1 && colorArray[0] === colorArray[1]){
      alert("You win")
  }
  let currentColor = randomColor()
  colorArray.push(currentColor)
  box.classList.add("active")
  
 box.style.backgroundColor = `${currentColor}`
 
 console.log(colorArray )
           
       })
   })
   
   
   
   
    
    
    
    
}
