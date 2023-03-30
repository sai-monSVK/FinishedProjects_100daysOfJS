const getLocationBtn = document.querySelector('.btn');
const locationText = document.querySelector('.location');

getLocationBtn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(displayPosition);
  
  function displayPosition(locationFromApi) {
    locationText.innerHTML = `
            Latitude: ${locationFromApi.coords.latitude} <br>
            Longitude: ${locationFromApi.coords.longitude}    
    `
  }
})