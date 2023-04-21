const counter = document.querySelector('.counter');
const endDate = new Date('2024-01-01 00:00:00').getTime();


setInterval(() => {
  const now = new Date().getTime();
  let difference = endDate - now;

  if ((difference/1000) > 0) {

    let days = Math.floor(difference / (1000 * 60 * 60 *24));
    let hours = Math.floor((difference % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / (1000));

    counter.innerHTML = `${days} Days | ${hours} Hours | ${minutes} Minutes | ${seconds} Seconds`;
  } else {
    counter.innerHTML = '🎆Happy New Year !!!🎆'; 
}},1000);