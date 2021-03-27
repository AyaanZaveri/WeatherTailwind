const api = {
    key: "c204db8646efd8ade5a73f313178d133",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('#search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
      return weather.json();
    }).then(displayResults);
  }
  
  function displayResults(weather) {
 
    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let city = document.querySelector('#cityname');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let weathernow = document.querySelector('#weather');
    weathernow.innerText = weather.weather[0].main;
    
    let fl = document.querySelector('#feelslike');
    fl.innerHTML = `<span>Feels Like: </span>${Math.round(weather.main.feels_like)}<span>°C</span>`;

    let wind = document.querySelector('#wind')
    wind.innerHTML = `<span>Wind: </span>${Math.round(weather.wind.speed * 3.6)}<span> km/h</span>`;

    let humidity = document.querySelector('#humidity')
    humidity.innerHTML = `<span>Humidity: </span>${weather.main.humidity}<span>%</span>`;

    let high = document.querySelector('#high');
    high.innerHTML = `<span>High </span>${Math.round(weather.main.temp_max)}<span>°C</span>`;

    let low = document.querySelector('#low');
    low.innerHTML = `<span>Low: </span>${Math.round(weather.main.temp_min)}<span>°C</span>`;

    let sRise = weather.sys.sunrise;
    let dtrise = new Date(sRise * 1000);
    let hrise = dtrise.getHours();
    let mrise = "0" + dtrise.getMinutes();
    let trise = hrise + ":" + mrise.substr(-2);
    console.log(trise);

    let sSet = weather.sys.sunset;
    let dtset = new Date(sSet * 1000);
    let hset = dtset.getHours();
    let mset = "0" + dtset.getMinutes();
    let tset = hset + ":" + mset.substr(-2);
    console.log(tset);

    let sunrise = document.querySelector('#sunrise');
    let sunset = document.querySelector('#sunset');
    sunrise.innerHTML = `<span>Sunrise: </span>${trise}`;
    sunset.innerHTML = `<span>Sunset: </span>${tset}`;

    weathericonnum = weather.weather[0].icon;

    console.log(weathericonnum);

     if (weathericonnum == "01d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/clear-day.svg"
    } else if (weathericonnum == "01n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/clear-night.svg"
    } else if (weathericonnum == "02n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day.svg"
    } else if (weathericonnum == "02d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night.svg"
    } else if (weathericonnum == "03d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/cloudy.svg"
    } else if (weathericonnum == "03n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/cloudy.svg"
    } else if (weathericonnum == "04d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/overcast-day.svg"
    } else if (weathericonnum == "04n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/overcast-night.svg"
    } else if (weathericonnum == "09d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day-drizzle.svg"
    } else if (weathericonnum == "09n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night-drizzle.svg"
    } else if (weathericonnum == "10d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day-rain.svg"
    } else if (weathericonnum == "10n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night-rain.svg"
    } else if (weathericonnum == "11d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/thunderstorms-day.svg"
    } else if (weathericonnum == "11n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/thunderstorms-night.svg"
    } else if (weathericonnum == "13d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-day-snow.svg"
    } else if (weathericonnum == "13n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/partly-cloudy-night-snow.svg"
    } else if (weathericonnum == "50d") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/mist.svg"
    } else if (weathericonnum == "50n") {
        icon.src = "https://bmcdn.nl/assets/weather-icons/v1.4.1/mist.svg"
    }

  }

//http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&APPID=c204db8646efd8ade5a73f313178d133