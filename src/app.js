document.getElementById("searchBtn").addEventListener("click", function () {
  let searchCountry = document.getElementById("countrySearch").value;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchCountry +
      "&appid=4a868d6116975b73269f7d5cbfd4a9cb"
  )
    .then((res) => res.json())
    .then((data) => {
      let name = data.name;
      let temp = data.main.temp;
      let mainTemp = temp - 273.15;
      let tempType = data.weather[0].main;
      let icons = data.weather[0].icon;
      let tempMax = data.main.temp_max;
      let tempMin = data.main.temp_min;
      let sunrise = data.sys.sunrise;
      let sunset = data.sys.sunset;

      console.log(data);

      //    display information
      document.getElementById("name").innerText = name;
      document.getElementById("temp").innerText = mainTemp.toFixed(2);
      document.getElementById("temp-type").innerText = tempType;
      document.getElementById("min").innerText = tempMin;
      document.getElementById("max").innerText = tempMax;
      let icon = document.getElementById("tempImg");
      icon.innerHTML = `<img src="http://openweathermap.org/img/w/${icons}.png" class="img-fluid temp-icon"/>`;
      document.getElementById('sunrise').innerText = sunrise;
      document.getElementById('sunset').innerText = sunset;
      
    });
});
