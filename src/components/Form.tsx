import { useState } from "react";

const Form = () => {
    // city ユーザーが入力してしたデータを保管する
    const [city, setCity] = useState<string>("");
    const getWeather = (e: any) => {
        // formの本来の動きを止める
        e.preventDefault();
        
        fetch(
            "https://api.weatherapi.com/v1/current.json?key=701cb2f152774df6a31172726210610&q=London&aqi=no"
        ).then(
            res => res.json()
            // jsonへ書き換え
        ).then(data => console.log(data));
        
        ; 
    };
    return(
        <form>
            <input 
            type="text" 
            name="city" 
            placeholder="都市名" 
            onChange={e => setCity(e.target.value)}
            />
            <button type="submit" onClick={getWeather}>Get Weather</button>
        </form>
    );
}

export default Form;