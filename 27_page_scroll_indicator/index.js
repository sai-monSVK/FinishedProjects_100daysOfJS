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

//scroll indicator

function scrollProgress() {
    let currentState = document.body.scrollTop || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercentage = (currentState / pageHeight) * 100;
    const progressBar = document.querySelector('.progress');
    console.log(scrollPercentage);
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + '%';
}

window.onscroll = () => {
    scrollProgress();
}