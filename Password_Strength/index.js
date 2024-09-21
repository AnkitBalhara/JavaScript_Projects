let password = document.getElementById("Password");
let powerPoint = document.getElementById("power-point");

password.oninput =function() {
  let inputValue = password.value
  let point = 0;
  let widthPower = ['1%','25%','50%','75%','100%']
  let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]
  if (inputValue.length > 4) {
    // In  the below line these are regular expressions which say that it should include
    // 0 to 9 digits (any)
    // a to z and A-Z 
    // And it should not include 0-9,a-z,A-Z and with this it should not include a space.
   let arrayEle = [/[0-9]/,/[a-z]/,/[A-Z]/,/[^0-9a-zA-Z ]/]
   arrayEle.forEach(element => {
    if(element.test(inputValue)){
      point++;
    }
   });
  }
  powerPoint.style.backgroundColor=colorPower[point]
  powerPoint.style.width=widthPower[point]
};
