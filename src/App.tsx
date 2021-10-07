import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';
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
  // ロード中の真偽値
  const [loading, setLoading] = useState<boolean>(false);
  // city ユーザーが入力してしたデータを保管する
  const [city, setCity] = useState<string>("");

  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
      // formの本来の動きを止める
      e.preventDefault();
      setLoading(true);
      
      fetch(
          `https://api.weatherapi.com/v1/current.json?key=701cb2f152774df6a31172726210610&q=${city}&aqi=no`
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
        // フォームの中を空にする
        setCity("");
        setLoading(false);
      })
      .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
