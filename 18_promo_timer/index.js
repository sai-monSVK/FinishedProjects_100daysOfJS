// CONFIG (set promo code time expiration in minutes)
const promoExpirationInMin = 10;

const counter = document.querySelector(".counter");

function startPromoCountdown(minutesToExpire) {
  let inSeconds = minutesToExpire * 60;

  if (minutesToExpire < 0) {
    counter.innerHTML = "No Promo Code Found";
    return;
  }

  const timer = setInterval(() => {
    if(inSeconds <= 0) {
      clearInterval(timer);
      counter.innerHTML = "Promo Code Expired -- Better Luck Next Time";
      return;
    }

    let days = Math.floor(inSeconds / (60 * 60 * 24));
    let hours = Math.floor((inSeconds % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((inSeconds % (60 * 60)) / 60);

    if (days > 0) {
      counter.innerHTML = `${days}d ${hours}h ${minutes}m ${inSeconds % 60}s`;
    } else if (hours > 0) {
      counter.innerHTML = `${hours}h ${minutes}m ${inSeconds % 60}s`;
    } else if (minutes > 0) {
      counter.innerHTML = `${minutes}m ${inSeconds % 60}s`;
    } else {
      counter.innerHTML = `${inSeconds % 60}s`;
    }

    inSeconds--;
  }, 1000);
}

startPromoCountdown(promoExpirationInMin);
