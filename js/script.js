const main = document.querySelector('main');

const invalidEmail = document.querySelector('#invalid-email');
const inputEmail = document.querySelector('#email');
const subscribeBtn = document.querySelector('#submit-btn');

const confirmedMsg = document.querySelector('#confirmed-message');
const userEmail = document.querySelector('#user-email');
const dismissMsg = document.querySelector('#dismiss-msg');


function formSuccess() {
    confirmedMsg.classList.add('active');
    main.classList.add('removeMain');
}

function validadteEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value.trim();

    if (validadteEmail(email)) {
        formSuccess();
        userEmail.innerText = email;
        invalidEmail.classList.remove('active');
        inputEmail.classList.remove('active');
    } else {
        invalidEmail.classList.add('active');
        inputEmail.classList.add('active');
    }
})

dismissMsg.addEventListener('click', () => {
    confirmedMsg.classList.remove('active');
    main.classList.remove('removeMain');
    inputEmail.value = "";
})