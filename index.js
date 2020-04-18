function femaleClicked() {
  var element = document.getElementByClassName("female");
  element.classList.add("female-clicked");
  element.classList.removeClass("female");
}

function maleClicked() {
  var element = document.getElementByClassName("male");
  element.classList.add("male-clicked");
  element.classList.removeClass("male");
}

function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value

if(weight > 0 && height > 0){
var finalBmi = weight/(height/100*height/100)

finalBmi = Math.floor(finalBmi);


document.getElementById('result-text').innerHTML = finalBmi

if (finalBmi < 18.5){
document.getElementById('meaning').innerHTML = "You are underweight."

} else if(finalBmi > 18.5 && finalBmi < 25){
document.getElementById('meaning').innerHTML = "You are healthy."

} else if(finalBmi > 25){
document.getElementById('meaning').innerHTML = "You are overweight."
}

} else{
document.getElementById('meaning').innerHTML = "Please Fill in everything correctly"
}

}
