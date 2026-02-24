const apiKey = "88914d1a5e90d947ce21650bcc8a1dde";

function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data); // 👈 VERY IMPORTANT (check browser console)

      if (data.cod === "404" || data.cod === 404) {
        alert("City not found");
        return;
      }

      if (data.cod === 401) {
        alert("Invalid API key");
        return;
      }

      document.getElementById("location").innerText = data.name;
      document.getElementById("temperature").innerText =
        `Temperature: ${data.main.temp} °C`;
      document.getElementById("condition").innerText =
        `Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").innerText =
        `Humidity: ${data.main.humidity}%`;
    })
    .catch(err => {
      alert("Error fetching weather data");
      console.error(err);
    });
}