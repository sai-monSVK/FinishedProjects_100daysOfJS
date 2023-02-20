// DOM elements queries
const page = document.querySelector('body');
const iconConnected = document.querySelector('.connected');
const iconUnconnected = document.querySelector('.unconnected');
const textOnline = document.querySelector('.online-msg');
const textOffline = document.querySelector('.offline-msg');


// listener

window.addEventListener('offline', toggleState);
window.addEventListener('online', toggleState);

// logic

function toggleState() {
        toggle(iconConnected, iconUnconnected);
        toggle(textOffline, textOnline);    
}

function toggle(onlineIcon, offlineIcon) {
    let arr = [onlineIcon, offlineIcon];
    arr.forEach(element => {
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none');
        } else {
            element.classList.add('d-none');
        }
    });
    
};