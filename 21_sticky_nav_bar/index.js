const links = document.querySelectorAll('.nav ul li a');

for(link of links) {
    link.addEventListener('click', smoothScroll);
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