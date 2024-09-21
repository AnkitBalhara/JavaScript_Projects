let boxes = document.querySelector('.container').children

function colors(){
let color1 = Math.ceil(0+Math.random()*255)
let color2 = Math.ceil(0+Math.random()*255)
let color3 = Math.ceil(0+Math.random()*255)

return `rgb(${color1},${color2},${color3})`
}

Array.from(boxes).forEach(e=>{
    e.style.color=colors()
    e.style.backgroundColor=colors()
})
