const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')
const items = []

ingredients.forEach(ingridient => {
  
  const name = document.createElement('li')
  
  name.textContent = ingridient;
  name.classList.add('item')

  items.push(name)
}
)

ingredientsEl.append(...items)

