var taco = document.getElementById("expandBioTray")
var bioCard = document.getElementById("bioCard")

console.log(taco)

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("event list added")
    taco.addEventListener("click", function(){
        console.log("button clicked");
        bioCard.classList.toggle("hidden")
    })
});