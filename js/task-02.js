const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')


ingredients.forEach(ingridient => {
  
  const name = document.createElement('li')
  
  name.textContent = ingridient;
  name.classList.add('item')

  ingredientsEl.append(name)
}
)

