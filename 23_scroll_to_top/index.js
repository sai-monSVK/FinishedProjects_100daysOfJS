const links = document.querySelectorAll('.nav ul li a');

for(link of links) {
    link.addEventListener('click', smoothScroll);
    link.addEventListener('click', makeActive);
}

function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute('href'); 
    document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}

// sticky header

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('transparent', window.scrollY <= 0);
});

// active menu switcher

function makeActive(){
    for(link of links) {
        link.classList.remove('active');
    }
    this.classList.toggle('active');
    
};


window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-to-top');
    scrollBtn.classList.toggle('hide', window.scrollY <= 180);
});
