// DOM manipulation
const city = document.querySelector('.inputCity');
const resCel = document.querySelector('.resCel');
const resFer = document.querySelector('.resFer');
const resWind = document.querySelector('.resWind');
const celImg = document.querySelector('.celImg');
const ferImg = document.querySelector('.ferImg');
const windImg = document.querySelector('.windImg');
const mainImg = document.querySelector('.imgLogo');

function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getInfo () {
    const response = await fetch(`https://wttr.in/${city.value}?format=j1`);
    const data = await response.json();
    // temp - data.current_condition[0].temp_C;
    celImg.style.display = 'flex';
    ferImg.style.display = 'flex';
    windImg.style.display = 'flex';
    mainImg.style.display = 'block';
    resCel.textContent  = `${data.current_condition[0].temp_C} °C`;
    resFer.textContent = `${data.current_condition[0].temp_F} °F`;
    resWind.textContent = `${data.current_condition[0].windspeedKmph} Km/H`;
    // weather - data.current_condition[0].weatherDesc[0].value
    console.log(data.current_condition[0].weatherDesc[0].value);
    if (data.current_condition[0].weatherDesc[0].value == 'Sunny') {
        mainImg.src = './img/sun.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Partly cloudy') {
        mainImg.src = './img/partly-cloudy.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Cloudy') {
        mainImg.src = './img/cloudy.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Overcast') {
        mainImg.src = './img/cloudy.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Patchy rain nearby') {
        mainImg.src = './img/patchy-rain.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Thundery outbreaks possible') {
        mainImg.src = './img/thunder.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Fog') {
        mainImg.src = './img/fog.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Drizzle') {
        mainImg.src = './img/drizzle.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Rain') {
        mainImg.src = './img/rain.png';
        return;
    }
    if (data.current_condition[0].weatherDesc[0].value == 'Snow') {
        mainImg.src = './img/snow.png';
        return;
    }
    else {
        mainImg.src = 'img/partly-cloudy.png';
    }
}