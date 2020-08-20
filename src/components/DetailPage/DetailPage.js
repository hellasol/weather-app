import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';
import Forecast from '../Forecast/Forecast';
import classes from './DetailPage.module.css';
import history from './../../history';
import Background from '../../resources/davies-designs-studio-_UCVrH-ZIIg-unsplash.jpg';
import Background2 from '../../resources/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg';

import { useParams } from 'react-router-dom';


const Details = (props) => {
    const { city } = useParams();
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    var sectionStyle = {
        backgroundSize: 'cover',
        backgroundImage: `url(${Background2})`
    };
    useEffect(() => {
            // e.preventDefault();
            if (city.length === 0) {
                return setError(true);
            }

            setLoading(true);

            fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${city}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY
                }
            })
                .then(response => response.json())
                .then(response => {
                    if (response.cod !== 200) {
                        throw new Error()
                    }
                    setResponseObj(response);
                })
                .catch(err => {
                    setError(true);
                    console.log(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
    },[]);

    return (
        <div className="App" style={sectionStyle} >
            {/* <h1 className="rainbow">{props.responseObj.name}</h1> */}
            <main>
                <Conditions
                    responseObj={responseObj}
                    error={error}
                    loading={loading}
                />
            </main>
            <footer >
                {/* By Solveig Helland */}
        </footer>
        </div>
    )
}
export default Details;