const form = document.querySelector('.login-form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();


    const email = form.elements.email.value;
    const password = form.elements.password.value;
    

    if (!email || !password) {
        alert('All form fields must be filled in');
    } 

 
    if (email && password) {
        const inputValue = {
          [form.elements.email.name]: email,
          [form.elements.password.name]: password.trim(),
        }

        console.log(inputValue);
        form.reset();
    }
});


