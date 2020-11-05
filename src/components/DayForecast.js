import React from 'react';
import classes from '../components/DayForecast.module.scss';
import styled from 'styled-components';

const DayForecast = (props) => {

    const Arrow = styled.div`
        --degrees: ${(props.degrees ? props.degrees : 0) + 'deg'};
    `

    return (
        <div className={ classes.weatherContainer }>
            <div className={ classes.wrapper }>
                <div className={ classes.today }>
                    <h1>Sol { props.sol }</h1>
                    <p>{ props.date }</p>
                </div>
                <div className={ classes.temp }>
                    <h1>Temperature</h1>
                    <p className={ classes.high }>{ Math.round(props.high) }</p>
                    <p className={ classes.low }>{ Math.round(props.low) }</p>
                </div>
                <div className={ classes.windContainer }>
                    <div className={ classes.compass }>
                        <Arrow className={ classes.arrow } degrees={ props.degrees }></Arrow>
                    </div>
                    <div className={ classes.wind }>
                        <h1>Wind</h1>
                        <p className={ classes.speed }>{ Math.round(props.windSpeed) }</p>
                    </div>
                </div>​
            </div>
        </div>
    )
}

export default DayForecast;