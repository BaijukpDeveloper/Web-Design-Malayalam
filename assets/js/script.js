const navToggler = document.querySelector('.hanberg-icon');
navToggler.addEventListener('click',() => {
    const headerMenu = document.querySelector('.navbar-menu');
    headerMenu.classList.add('show')
    console.log('clicked');
})