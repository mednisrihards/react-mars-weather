import React from 'react';
import classes from '../components/WeekDay.module.scss';

function WeekDay({setSelectedSol, index, high, low, sol, date}) {

    return (
        <div className={ classes.container }>
            <div className={ classes.today }>
                <h1>Sol { sol }</h1>
                <p>{ date }</p>
            </div>
            <div className={ classes.temp }>
                <p className={ classes.high }>{ Math.round(high) }</p>
                <p className={ classes.low }>{ Math.round(low) }</p>
            </div>
            <button onClick={() => setSelectedSol(index)}>More info</button>
        </div>
    )
}

export default WeekDay;