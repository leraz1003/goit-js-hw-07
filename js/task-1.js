console.group('Завдання 1')
const ul = document.getElementById('categories');
const items = document.querySelectorAll('.item');
const titles = document.querySelectorAll('h2');



console.log("Numbers of categories:", items.length)

items.forEach((item) => {
    const child = item.children;
    console.log('Category:', child[0].textContent);
    console.log('Elements:', child[1].children.length);
})

console.groupEnd();

