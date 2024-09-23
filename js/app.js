// nav bar func

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu")
    {
        menuBtn.className += " responsive";
    }
    else
    {
        menuBtn.className = "nav-menu"
    }
}










// JavaScript for Light Mode / Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Dark Mode';
    } else {
        themeToggle.textContent = 'Light Mode';
    }
});












/* shodow on nav while scroll */
window.onscroll = function() {headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        navHeader.style.boxShadow = "0 1px 6px red";
        navHeader.style.height = "70px";
        navHeader.style.boxShadow = "70px";
    }
    else
    {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.boxShadow = "90px";

    }


    
}




// typing effect 

document.addEventListener("DOMContentLoaded", function() {
    var typingEffect = new Typed(".typedText", {
        strings: ["Web Developer", "Software Engineer", "Full-Stack Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
});





// scroll reveal animation from top

document.addEventListener("DOMContentLoaded", function() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    // home
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', {delay: 100});
    sr.reveal('.featured-text-info', {delay: 200});
    sr.reveal('.featured-text-btn', {delay: 200});
    sr.reveal('.social_icons', {delay: 200});
    sr.reveal('.featured-image', {delay: 250});


    //project
    sr.reveal('.project-box',{interval:200})


    //headings
    sr.reveal('.top-header',{})
});





document.addEventListener("DOMContentLoaded", function() {
    // scroll reveal from left to right
    const srLeft = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    srLeft.reveal('.about-info', {delay: 100});
    srLeft.reveal('.contact-info', {delay: 100});

    // about skills and form box
    const srRight = ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    srRight.reveal('.skills-box', {delay: 100});
    srRight.reveal('.form-control', {delay: 100});
    srRight.reveal('.map-container',{delay:200});
});







// change active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

// Fixing the event listener
window.addEventListener('scroll', scrollActive);












let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};








function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}