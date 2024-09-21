var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let commentArea = document.querySelector(".comment");
let submitBtn = document.getElementById("submit");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

submitBtn.addEventListener("click", calculateBMI);

function calculateBMI() {
  if (
    age.value == "" || height.value == "" || weight.value == "" || (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBMI();
  }
}

function countBMI() {
  let weightValue = parseFloat(weight.value);
  let heightValue = height.value;
  // Converting height in meters..
  let foot = heightValue.split(".")[0];
  let inches = heightValue.split(".")[1];
  
  let Bmi = 0;
  let result = "";
  if (inches > 11) {
    modal.style.display = "block";
    modalText.innerHTML = `Enter Correct Height(Inches)!`;
  } else {
    let totalInches = 0;
  totalInches = parseInt(foot * 12) + parseInt(inches!=undefined?inches:0);
  let inMeter = (totalInches / 39.37).toFixed(3);
  Bmi = (weightValue / (inMeter * inMeter)).toFixed(2);

  if (Bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= Bmi && Bmi <= 24.9) {
    result = "Healthy";
  } else if (25 <= Bmi && Bmi <= 29.9) {
    result = "Overweight";
  } else if (30 <= Bmi && Bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= Bmi) {
    result = "Extremely obese";
  }

  commentArea.style.display = 'block';
  commentArea.innerHTML = `You are <span id="highlight">${result}</span>`
  document.getElementById("result").innerHTML = Bmi;
  }
}

// When your click on button (x) to make input..
span.addEventListener("click", function () {
  modal.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
