// seleting mobile menu icon
const navToggler = document.querySelector('.hanberg-icon');

// adding action to mobile menu icon
navToggler.addEventListener('click',() => {

    // selecting mobile menu list
    const headerMenu = document.querySelector('.navbar-menu');

    // selectiong mobile menu icons 
    const navIcon = document.querySelectorAll('.navIcon');
    // adding clicking action to mobile menu icon
    headerMenu.classList.toggle('show')
    
    // moible icon show and hidden action
    navIcon.forEach(icon=>{
        icon.classList.toggle('hidden')
    })
})