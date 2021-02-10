hamburger = document.querySelector('.hamburger')
nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('clicked');
    if (nav.style.height === 'unset') {
        nav.style.height = '0';
    } else nav.style.height = 'unset';
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
});