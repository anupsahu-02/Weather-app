import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({})

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div>
            <SearchBox newInfo={updateInfo}/> <br /> <hr />
            {weatherInfo.city && <InfoBox info={weatherInfo}/>}
        </div>
    )
}