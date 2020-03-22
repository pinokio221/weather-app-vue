<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.weather[0].main == weather.weather[0].main  ? weather.weather[0].main : ''">
    <div class="weather">
        <div class="input-group mb-3" id = "inputField">
            <input v-model="value" placeholder="Type city name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        <button type="button" class="btn btn-dark" v-on:click="getWeather">Check</button><br>
        <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="country">{{ weather.name }}, {{ weather.sys.country }}</div>
        <div class="country-weather">{{ weather.weather[0].main }}</div>
        <div class ="temp">{{ Math.round(weather.main.temp) }}°C</div>
        <div class="feels">feels like {{ Math.round(weather.main.feels_like) }}°C</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
        return {
            api_key:"2dea6a54c5f8fd1af40587fac38956ff",
            info: null,
            value: '',
            weather: '',
        };
    },
    methods: {
        getWeather: function (event) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.value}&appid=${this.api_key}&units=metric`)
            .then(response => {
              if (response.ok) {
              return response.json();
            }
            else {
              throw new Error('Something went wrong');
            }
            }).then(this.showWeather)
            .catch((error) => {
              this.error = error;
            });
        },
        showWeather(results) {
          this.weather = results;
        }
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Baloo+2');

#app {
  font-family: 'Baloo 2', cursive;
  display: block;
  background-image: url("../images/bg.jpg");
  background-size: cover;
  padding: 50px;
  width: 50%;
  color: white;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: 5%;
  border-radius: 20px;
}

#app.Rain {
    background-image: url("../images/rain.jpg");
}
#app.Snow {
    background-image: url("../images/snow.jpg");
}
#app.Clouds {
    background-image: url("../images/clouds.jpg");
}
#inputField {
    margin: 0px auto;
    font-size: 22px;
    width: 80%;
}

#checkBtn {
    box-sizing: border-box;
}

.country {
  cursor: default;
  font-size: 30px;
}

.temp {
  cursor: default;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 8px;
  background-color: rgba(144, 207, 224, 0.3);
  text-height: auto;
  font-family: 'Baloo 2', cursive;
  font-size: 50px;
  font-weight: 1000;
  width: 110px;
  height: 70px;
  margin: 0 auto;
}

.weather {
  cursor: default;
  font-size: 25px;
}
.feels {
  font-size: 20px;
  padding-top: 10px;
  font-style: italic;
}

</style>
