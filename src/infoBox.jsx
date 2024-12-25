import "./InfoBox.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    let rainyUrl = "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let clearUrl = "https://plus.unsplash.com/premium_photo-1664304423623-4f9d5ed90b4f?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let hotUrl = "https://media.istockphoto.com/id/1221777541/photo/chocolate-leaves-in-autumn.jpg?s=1024x1024&w=is&k=20&c=QxnlCDqB0jf_7K8vAgXb3I_ucVPMJcsfQmdENKQhaAY="
    let coldUrl = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <>
            <div className="InfoBox">
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="180"
                    image={info.humidity > 80 ? rainyUrl : info.temp > 15 ? hotUrl : info.temp < 2 ? coldUrl : clearUrl}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon fontSize="small"/> : info.temp > 15 ? <WbSunnyIcon fontSize="small"/> : <AcUnitIcon fontSize="small"/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}%</div>
                        <div>Min Temp = {info.minTemp}&deg;C</div>
                        <div>Max Temp = {info.maxTemp}&deg;C</div>                        
                        <div>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelLike}&deg;C</div>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
        </>
    )
}