import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';
import { useState } from "react";

  type ResultsStateType = {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string,
    icon: string
  }

function App() {

  // city ユーザーが入力してしたデータを保管する
  const [city, setCity] = useState<string>("");

  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  const getWeather = (e: any) => {
      // formの本来の動きを止める
      e.preventDefault();
      
      fetch(
          "https://api.weatherapi.com/v1/current.json?key=701cb2f152774df6a31172726210610&q=London&aqi=no"
      ).then(
          res => res.json()
          // jsonへ書き換え
      ).then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      })
  }

  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}

export default App;
