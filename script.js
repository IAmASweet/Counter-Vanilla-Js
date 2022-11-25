const btnIncrement = document.querySelector(".btn-increment")
const btnDecrement = document.querySelector(".btn-decrement")
const clickNumber = document.querySelector(".number")
let timesClicked = 0


const increment = () => {
  clickNumber.textContent = ++timesClicked
}


const decrement = () => {
  if (timesClicked > 0) {
    clickNumber.textContent = --timesClicked
  }
}


btnIncrement.addEventListener('click', increment)
btnDecrement.addEventListener('click', decrement)