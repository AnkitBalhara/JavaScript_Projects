// alert("Jai Shree Ram")

let html = document.getElementById("html");
let container = document.querySelector(".container");
let theme = document.querySelector(".theme");
let dateofbirth = document.getElementById("dateofbirth");
let dateofdeath = document.querySelector(".dateofdeath");
let NumOfDays = document.getElementById("NumOfDays");
let calculate = document.querySelector(".calculate");

let alive = document.getElementById("alive");
let death = document.getElementById("death");
let deathdateinput = document.getElementById("deathdateinput");
let deathdatelabel = document.getElementById("deathdatelabel");


html.classList.add("dark");
    html.classList.remove("light");
theme.addEventListener("click", () => {
  if (!theme.checked) {
    html.classList.add("light");
    html.classList.remove("dark");
    // alert("On")
  } else {
    html.classList.add("dark");
    html.classList.remove("light");
    // alert("off")
  }
});
alive.addEventListener("click", () => {
  deathdatelabel.classList.add("togle-hide");
  deathdatelabel.classList.remove("togle-show");
  deathdateinput.classList.add("togle-hide");
  deathdateinput.classList.remove("togle-show");
  dateofdeath.value=""
});
death.addEventListener("click", () => {
  deathdatelabel.classList.add("togle-show");
  deathdatelabel.classList.remove("togle-hide");
  deathdateinput.classList.add("togle-show");
  deathdateinput.classList.remove("togle-hide");
});

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  if (dateofbirth.value === "") return alert("Enter Date of Birth!!!");

  if (deathdatelabel.classList.contains("togle-show")) {
    if (dateofdeath.value === "") {
      return alert("Enter Date of Death!!!");
    } else {
      let birth = new Date(dateofbirth.value).getTime();
      let death = new Date(dateofdeath.value).getTime();
      let daysLived = Math.floor((death - birth) / (24 * 60 * 60 * 1000));
      NumOfDays.innerHTML = `Days Lived :- ${daysLived}`;
    }
  } else {
    let birth = new Date(dateofbirth.value).getTime();
    let todayDate = new Date().getTime();
    let daysAlive = Math.floor((todayDate - birth) / (24 * 60 * 60 * 1000));

    NumOfDays.innerHTML = `Days Alive :- ${daysAlive}`;
  }
  dateofdeath.value=""
  dateofbirth.value=""
});