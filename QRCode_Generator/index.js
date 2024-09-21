let inputText = document.getElementById("inputText")
let qrImg = document.getElementById("qrImg")
let generateQr = document.getElementById("generateQr")

generateQr.addEventListener('click',QrGenerator)

function QrGenerator(){
    if(inputText.value!=''){
    let linkQr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+inputText.value;
    qrImg.src=linkQr;
    qrImg.style.display='inline'
}else{
    inputText.classList.add('animationClass')
    setTimeout(() => {
        inputText.classList.remove('animationClass')
    }, 1000);
    qrImg.style.display='none'
}
}
