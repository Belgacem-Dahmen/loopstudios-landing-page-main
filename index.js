

const openMenu = document.getElementById('open-menu')
const mobileMenu = document.getElementById('mobile-menu')

const closeMenu = document.getElementById('close-menu')


openMenu.addEventListener('click', () => {
    mobileMenu.style.display = "block";

})

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = "none";

})  