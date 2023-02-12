const changeColorBtn = document.querySelector('.change-color')
const colorInfoEl = document.querySelector('.color')

changeColorBtn.addEventListener('click', event => {
  document.body.style.backgroundColor = getRandomHexColor()
  colorInfoEl.textContent = document.body.style.backgroundColor
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
