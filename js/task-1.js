console.group('Завдання 1')

const items = document.querySelectorAll('.item');

console.log("Numbers of categories:", items.length)

items.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})

console.groupEnd();

