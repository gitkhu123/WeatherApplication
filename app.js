let weather ={
    apikey : '3efa9db7516b4f218b1122344232602',
    fetchWeather : function(city){
        fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${city}&aqi=yes`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){

        // console.log(data);
        // const { name } = data;
        const name = data.location.name;
        const region = data.location.region;
        const country = data.location.country;
        const temp = data.current.temp_c;
        const text = data.current.condition.text;
        const icon = data.current.condition.icon;
        const humidity = data.current.humidity;
        const wind_speed = data.current.wind_kph;
        console.log(name, region, country, temp, text, icon, humidity);
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.temp').innerText = `${temp}°C`;
        document.querySelector('.icon').src = `${icon}`;        
        document.querySelector('.humidity').innerText = `Humidity : ${humidity}`;        
        document.querySelector('.wind').innerText = `Wind-Speed : ${wind_speed}`;        

    }
}


const search = document.getElementById('search-btn');
search.addEventListener('click', displaysearch)
function displaysearch(e){
    const serachinput = document.getElementById('search');
    weather.fetchWeather(serachinput.value);
}