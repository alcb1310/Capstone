function getDate() {
  var date = new Date();
  document.getElementById("time").textContent = `${date.toLocaleTimeString(
    "es-la",
    { timeStyle: "medium" }
  )}`;
}

getDate();
setInterval(getDate, 1000);

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=landscape;"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url("${data.urls.regular}")`;
    document.getElementById("image-info").innerHTML = `
        <h3>By: ${data.user.name}</h3>
        <h5>Location: ${data.location.name}</h5>
    `;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1523978591478-c753949ff840?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTAzNDI1MzY&ixlib=rb-1.2.1&q=85")`;
  });

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("crypto").innerHTML = `
      <div id="crypto-top">
        <img src="${data.image.thumb}">
        <span>${data.name}</span>
      </div>
      <p>🎯: $${data.market_data.current_price.usd}</p>
      <p>👆: $${data.market_data.high_24h.usd}</p>
      <p>👇: $${data.market_data.low_24h.usd}</p>
    `;
  })
  .catch((err) => console.error(err));

fetch(
  "https://api.freegeoip.app/json/?apikey=df68f840-c03a-11ec-b469-877627daed7d"
)
  .then((res) => res.json())
  .then((data) => {
    const { latitude, longitude } = data;
    const apiKey = "9b7a9120cf668644357533ea62284e1c";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
      // fetch(
      //   `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`
      // )
      .then((res) => {
        if (!res.ok) {
          throw "Weather data not recieved";
        }
        return res.json();
      })
      .then((weatherData) => {
        const { weather, main } = weatherData;
        console.log(weatherData, data);
        document.getElementById("weather").innerHTML = `
          <img src ="http://openweathermap.org/img/wn/${weather[0].icon}.png">
          <span>${Math.round(main.temp)} &deg;C</span>
          <p>${data.city} - ${data.country_name}</p>
        `;
        //
      });
  })
  .catch((Err) => console.error(Err));
