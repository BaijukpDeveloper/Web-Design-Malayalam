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


// window scrolling header effect
const navbarFixed = () =>{
    const headerEl = document.querySelector('.header');

    // header and window height
    const header_offset_top = headerEl.clientHeight + 50;

    // scrolling action
    window.addEventListener("scroll", ()=>{
        // taking the scrolling values
        let scroll = window.pageYOffset || document.documentElement.scrollTop;

        // checking scrolling or not
        if(scroll >= header_offset_top){
            headerEl.classList.add('fixed');
        }else{
            headerEl.classList.remove('fixed')
        }
    })
};



const setMenuActive = () =>{
    const sectionEl = document.querySelectorAll('section');
    console.log('section',sectionEl);
    const navEl = document.querySelectorAll('.navbar-menu-items>a');
    console.log('nav element', navEl);
    window.addEventListener('scroll',() =>{
        let current = "";

        sectionEl.forEach((section)=>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        })
        
        navEl.forEach((li)=>{
            li.classList.remove("active");
            if(current == li.getAttribute("href").split("#")[1]){
                li.classList.add("active")
            }
        })
    });
    
};

navbarFixed();
setMenuActive();