type ResultsPropType = {
    results: {
        country:string;
        cityName:string;
        temperature:string;
        conditionText:string;
        icon:string;
    }
}

const Results = (props: ResultsPropType) => {
    return(
        <h1>気象データ{props.results.country}</h1>
    );
}

export default Results