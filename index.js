var app = new Vue({
    el: "#main",
    data() {
        return {
            info: null,
            getValue: ''
        };
    },
    filters: {
        rowTemp(value) {
            return Math.round(value)
        }

    },
    methods: {
        getWeather: function (event) {
        axios
            .get("https://api.openweathermap.org/data/2.5/weather?q=" + app.getValue + "&appid=2dea6a54c5f8fd1af40587fac38956ff&units=metric")
            .then(response => (this.info = response.data));
        },
        
    }
}) 




