const boxesQuantityEl = document.querySelector('input');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector('#boxes')

destroyBtn.addEventListener('click', eraseContent)

createBtn.addEventListener("click", () => {

  let width = 30;
  let height = 30;

  for (let i = 0; i < boxesQuantityEl.value; i += 1) {
    let newBox = document.createElement('div');

    newBox.style.width = width + "px";
    newBox.style.height = height + "px";
    newBox.style.backgroundColor = getRandomHexColor()
    width += 10;
    height += 10;
    boxesEl.append(newBox)
  }
})

function eraseContent(event) {
  boxesEl.innerHTML = ""
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
