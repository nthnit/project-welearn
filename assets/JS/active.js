const logoutButtons = document.querySelectorAll("#logout button");
const changeACC = document.querySelector('#chageAcc');
const profileBtn = document.querySelector('#profile-btn');
const sProfileBtn = document.querySelector('#s-profile-btn');
const changLang = document.querySelector('#changeLang');
const backProfile = document.querySelector('#back-profile');


// Duyệt qua từng button và thêm sự kiện "click"
logoutButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Chuyển hướng đến trang đăng nhập khi nhấn vào button
        window.location.href = "login.html";
    });
});


changeACC.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = `\choose-user.html`;
});

changLang.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'change-language.html';
});

profileBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'parent-profile.html';
});
sProfileBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'student-profile.html';
});

backProfile.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'parent-profile.html';
});


