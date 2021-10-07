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
    const { cityName, country, temperature, conditionText, icon } = props.results;
    return(
        <>
            {cityName && <div>{cityName}</div>}
            {country && <div>{country}</div>}
            {temperature && <div>{temperature}<span>℃</span></div>}
            {cityName && <div>{cityName}</div>}
            {conditionText && <div><img src={icon} alt="icon" /><span>{conditionText}</span></div>}
        </>
    );
}

export default Results