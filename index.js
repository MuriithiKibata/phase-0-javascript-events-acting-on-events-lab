// Your code here
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = '#FF69B4'
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left > 10) {
        dodger.style.left = `${left - 1}px`
        
    }
    
        
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    })
//const gerdod = document.getElementById("dodger")
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "")
    //const rightNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    //const right = parseInt(rightNumbers, 10)
    if (left > 10) {
        dodger.style.left = `${left + 1}px`
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
    })