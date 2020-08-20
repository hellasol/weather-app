import React from 'react';
import classes from './Conditions.module.css'
import temperature from '../../resources/hot.png';
import rainbow from '../../resources/rainbow.png';
import wind from '../../resources/wind.png';
import sunrise from '../../resources/moon.png';

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = hour + ':' + min + ':' + sec;
    return time;
}

const conditions = (props) => {


    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
            {props.loading && <div className={classes.Loader} />}
            {props.responseObj.cod === 200 ?


                <div>
                    <div className='rainbow'>{props.responseObj.name}</div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="grid u-grid-cols-1-md">
                        <div class="u-grid-col-1-7">
                            <img src={rainbow} width="70" height="70" />
                        </div>
                        <div class="u-grid-col-7-13">
                            <div className='details'>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}</div>
                        </div>

                        <div class="u-grid-col-1-7">
                            <img src={temperature} width="70" height="70" />
                        </div>
                        <div class="u-grid-col-7-13">
                            <div className='details'>It will be a high of {props.responseObj.main.temp_max} degrees and a low of {props.responseObj.main.temp_min} degrees</div>
                        </div>

                        <div class="u-grid-col-1-7">
                            <img src={wind} width="70" height="70" />
                        </div>
                        <div class="u-grid-col-7-13">
                            <div className='details'>The visibility is currently {props.responseObj.visibility} m and the widspeed is {props.responseObj.wind.speed} mph</div>
                        </div>

                        <div class="u-grid-col-1-7">
                            <img src={sunrise} width="70" height="70" />
                        </div>
                        <div class="u-grid-col-7-13">
                            <div className='details'>Sunrise at {timeConverter(props.responseObj.sys.sunrise)} Sunset at {timeConverter(props.responseObj.sys.sunset)}</div>
                        </div>
                    </div>





                </div>
                : null
            }
        </div>
    )
}
export default conditions;
