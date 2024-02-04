
// const str ="hello"
const randomColor = function(){
    const hex ="0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
      
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId
console.log(randomColor())
const startChangingColor = function(){
    document.body.style.backgroundColor = randomColor()
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
let stop
document.querySelector("#start").addEventListener('click',()=>{
     intervalId = setInterval(startChangingColor,1000)


})
document.querySelector("#stop").addEventListener('click',()=>{
    stopChangingColor()
})