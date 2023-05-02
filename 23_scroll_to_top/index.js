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


const scrollBtn = document.querySelector('.scroll-to-top');
const rootElement = document.documentElement;

document.addEventListener('scroll', showBtn);

function showBtn() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if((rootElement.scrollTop / scrollTotal) > 0.3) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }

}

scrollBtn.addEventListener('click', () => {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})