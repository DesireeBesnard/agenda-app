import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = '9b418e796916de5e0747e5730715f743';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    useEffect(()=> {
        fetch ('https://api.openweathermap.org/data/2.5/weather?q=Besancon&lang=fr&appid='+key+ '&units=metric')
        .then((res) => res.json())
        .then((data) => {
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
        })
    },[])
return (
    <>
        <p className="m-0 temperature font-weight-bold">Température: { Math.round(mainTemp)} °C</p>
        <p className="m-0">Ressenti: {Math.round(feels_like)} °C</p>
        <p className="m-0">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
    </>
)
}
export default WeatherFetch;