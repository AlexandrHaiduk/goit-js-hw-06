const categories = document.querySelectorAll('.item');

logInformation(categories)

function logInformation(categoryList) {
    console.log(`Number of categories: ${categories.length}`)
    console.log("")
    categoryList.forEach(category => {
        const categoryTitle = category.querySelector('h2')
        const categoryElements = category.querySelectorAll('li')
        console.log(`Category: ${categoryTitle.textContent}`)
        console.log(`Elements: ${categoryElements.length}`)
        console.log("")
})
}

