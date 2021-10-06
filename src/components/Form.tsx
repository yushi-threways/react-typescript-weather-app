import { useState } from "react";

const Form = () => {
    // city ユーザーが入力してしたデータを保管する
    const [city, setCity] = useState<string>("");

    return(
        <form>
            <input 
            type="text" 
            name="city" 
            placeholder="都市名" 
            onChange={e => setCity(e.target.value)}
            />
            {city}
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default Form;