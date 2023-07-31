<template>
    <section class="all">
        <div class="card">
            <div class="card-header text-center">
                <h1 class="text-primary">Weather App</h1>
            </div>
            <div class="text-center card-body row">
                <!-- <div class="col-3"></div>
                <div class="col-6 text-center"> -->
                    <div class="user-data">
                        <label>Enter a city</label>
                        <input v-model="cityInput" class="ms-2 mb-3" type="text" placeholder="please enter a city"/>
                    </div>
                    <div>
                        <button @click="showWeather()" class="mb-4 btn btn-success">Check weather</button>
                    </div>
                    <div class="display">
                        <!-- {{ cityResult }} -->
                        <!-- {{ fmtWeatherData }} -->
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered align-middle">
                            <thead class="thead-light text-center">
                                <tr>
                                    <!-- <th>#</th> -->
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Temperature</th>
                                    <th>Weather</th>
                                    <th>Humidity</th>
                                    <th>Wind</th>
                                </tr>
                            </thead>
                            <tbody v-if="cityResult">
                                <!-- <tr v-for="(cityRes,index) in cityResult" :key="index"> -->
                                    <td>{{ cityResult.name }}</td>
                                    <td>{{ cityResult.name }}</td>
                                    <td>{{ cityResult.main.temp }} F</td>
                                    <td>{{ cityResult.weather[0].description }}</td>
                                    <td>{{ cityResult.main.humidity }}%</td>
                                    <td>{{ cityResult.wind.speed }}</td>
                                <!-- </tr> -->
                            </tbody>
                            <tbody v-else>
                                No city selected
                            </tbody>
                        </table>
                    </div>
                    <!-- <table>
                        <tr>
                            <th>Property</th>
                            <th>Value</th>
                        </tr>
                        <tr v-for="(value, key) in parsedWeatherData" :key="key">
                            <td>{{ key }}</td>
                            <td>{{ JSON.stringify(value) }}</td>
                        </tr>
                    </table> -->
                <!-- </div>
                <div class="col-3"></div> -->
            </div>
        </div>
    </section>
</template>

<script>
// const url = 'https://open-weather13.p.rapidapi.com/city/Kuala%20Lumpur';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4bd17f071cmsh36b0e0e05d6df6ap137ef3jsn7a23427628f1',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

export default {
    name: 'App',
    data(){
        return{
            cityInput: "",
            cityResult: '',
            fmtWeatherData: []
        }
    },
    methods:{
        async showWeather(){
            const encodedCity = encodeURIComponent(this.cityInput);
            // console.log(this.userInput)
            console.log(encodedCity);
            const url = `https://open-weather13.p.rapidapi.com/city/${encodedCity}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4bd17f071cmsh36b0e0e05d6df6ap137ef3jsn7a23427628f1',
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                this.cityResult = JSON.parse(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
    },
    computed:{
        // parsedWeatherData() {
        //     const formattedWeather =  JSON.parse(this.cityResult);
        //     this.fmtWeatherData = formattedWeather;
        // },
    },
    components:{
    }
}
</script>

<style scoped>

</style>