// 1. click a button and show the content with 60px fontSize 
// and bgColor red and bordeRadius 50%

let k = document.getElementById("p");
let a = document.getElementById("btn");
a.onclick = function b(){
k.style.fontSize="60px"
k.style.backgroundColor="red"
k.style.textAlign="center"
k.style.borderRadius="50%"
}




// 2. click the button and display three images on clicking the button 
// ft img should be of border radius 30px , second img should be border radius 100px , 
// third img should be of borderradius 50%

let images = document.getElementById("button");
function display(){
    let images=document.getElementById("images");
    images.style.display="block";
    document.getElementById("img1").style.borderRadius="30px"
    document.getElementById("img2").style.borderRadius="100px"
    document.getElementById("img3").style.borderRadius="50%"
}