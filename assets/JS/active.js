const logout = document.querySelector('#logout');
const changeACC = document.querySelector('#chageAcc');
const profileBtn = document.querySelector('#profile-btn');


logout.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = "\login.html";
});



changeACC.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = `\choose-user.html`;
});


profileBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'parent-profile.html';
});


