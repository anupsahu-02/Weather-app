import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({newInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // opneWeather Website;
    // ?q={city name}&appid={API key}

    const API_KEY = "cba41e7d92adc997bc1e9281e31f8131";

    let getGeoCode = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse)
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                feelLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            console.log(city);
            let result = await getGeoCode();
            setError(false);
            newInfo(result);
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" size='small' 
                    value={city} onChange={handleChange} required/> <br /> <br />
                <Button type='submit' size='small' variant="contained">Search</Button>
            </form>
            {error && <h2 style={{color: "red"}}>No such place exist!</h2>}
        </div>
    )
}