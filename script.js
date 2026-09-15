let count = 0

const button = document.getElementById("like")
const output = document.getElementById("outputlike")

button.addEventListener("click",function(){
    count = count + 1 ;
    output.textContent = "liked " +count+ " times";
});