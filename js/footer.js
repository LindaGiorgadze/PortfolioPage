let phone = document.getElementById('phone');
let numb = document.getElementById('numb');

phone.addEventListener('click', function() {
    numb.classList.toggle('footeractive');
});

const mail = document.getElementById('mail');
const email = document.getElementById('email');

mail.addEventListener('click', function() {
    email.classList.toggle('footeractive');
})

