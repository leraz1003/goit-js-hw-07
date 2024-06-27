
const input = document.getElementById('name-input');
const inputName = document.getElementById('name-output');

input.addEventListener('change', () => {
    const valueWithoutSpaces = input.value.trim();
    inputName.textContent = valueWithoutSpaces;
    if (!valueWithoutSpaces) {
        inputName.textContent = "Anonymous";
    }
})

