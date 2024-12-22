const apiKey = "e2f3ff5e32e226766b4a26434ed23e75"; 
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

        
        async function fetchWeather(city) {
            try {
                const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
                if (!response.ok) throw new Error("Could not fetch weather data");
                const data = await response.json();

                
                const cityName = `${data.name}, ${data.sys.country}`;
                const tempCurrent = data.main.temp;
                const feelsLike = data.main.feels_like;
                const tempMax = data.main.temp_max;
                const tempMin = data.main.temp_min;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                const iconCode = data.weather[0].icon;

                
                document.getElementById("city_name").textContent = cityName;
                document.getElementById("current_temp").textContent = `${tempCurrent}°C`;
                document.getElementById("feels_like").textContent = `feels like: ${feelsLike}°C`;
                document.getElementById("temp_max").textContent = `${tempMax}°C max`;
                document.getElementById("temp_min").textContent = `${tempMin}°C min`;
                document.getElementById("humidity").textContent = `${humidity}% humidity`;
                document.getElementById("wind_speed").textContent = `${windSpeed} km/h speed of the wind`;
                document.getElementById("weather_icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                document.getElementById("weather_icon").alt = data.weather[0].description;
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }

        
        fetchWeather("Paris");

    
        document.getElementById("city_select").addEventListener("change", (event) => {
            fetchWeather(event.target.value);
        });