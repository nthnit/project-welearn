const form = document.querySelector('#form');
const submitbtn = document.querySelector('#submit-btn');
const emailInput = document.querySelector('#user_email');
const emailValidationMessage = document.querySelector('#emailValidationMessage');
const pwInput = document.querySelector('#user_pw');
const pwInputValidationMessage = document.querySelector('#pwValidationMessage');


//GENERAL
form.addEventListener('input', () => {
    form.addEventListener('input', () => {
        if (form.checkValidity() && form.querySelector('#user_email').value.trim() !== '') {
            submitbtn.removeAttribute('disabled');
        } else {
            submitbtn.setAttribute('disabled', 'disabled');
        }
    });

})

// emailInput.addEventListener('blur', () => {
//     if (form.querySelector('#user_email').value.trim() !== '') {
//         form.classList.remove('form-false');
//     } else {
//         form.classList.add('form-false');
//     }
// });


emailInput.addEventListener('blur', () => {
    // Kiểm tra tính hợp lệ của email

    if (form.querySelector('#user_email').value.trim() == '') {
        emailValidationMessage.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#fa0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
    </svg> This feild is required`;
        // Thêm class 'form-false'
        form.classList.add('form-false-em');
    }
    else if (!emailInput.validity.valid) {
        // Nếu không hợp lệ, hiển thị thông báo
        emailValidationMessage.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#fa0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
    </svg> Email is invalid`;
        // Thêm class 'form-false'
        form.classList.add('form-false-em');
    }
    else {
        // Nếu hợp lệ, xóa thông báo và class 'form-false'
        emailValidationMessage.textContent = '';
        form.classList.remove('form-false-em');
    }
});




//USE FOR LOGIN
pwInput.addEventListener('blur', () => {
    if (form.querySelector('#user_pw').value.trim() == '') {
        pwInputValidationMessage.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#fa0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
    </svg> This field is required`;
        form.classList.add('form-false-pw');
    }
    else {
        // Nếu hợp lệ, xóa thông báo và class 'form-false'
        pwInputValidationMessage.textContent = '';
        form.classList.remove('form-false-pw');
    }
});
