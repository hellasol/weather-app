import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';
import history from './../../history';
import Background2 from '../../resources/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg';

import App from '../../App.css'

const Forecast = () => {
    var sectionStyle = {
        backgroundSize: 'cover',
        backgroundImage: `url(${Background2})`
    };
    const [city, setCity] = useState('');

    return (
        <div className="App" style={sectionStyle}>
            <h1 className="rainbow">Whats the weather like?</h1>
                <main>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter City"
                            maxLength="50"
                            className={classes.textInput}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button className={classes.Button} type="submit" onClick={() => history.push(`/cities/${encodeURIComponent(city)}`)}>Get Forecast</button>
                    </form>
                </main>
                <footer >
                    {/* Weather By Solveig Helland */}
        </footer>
        </div>
    )
}
export default Forecast;