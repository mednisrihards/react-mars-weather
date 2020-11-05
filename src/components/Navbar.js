import React from 'react';
import classes from '../components/Navbar.module.scss';

function Navbar() {
    return (
        <div className={classes.navBar}>
            <div className={classes.logo}> WEATHER ON MARS AT ELYSIUM PLANITIA </div>
        </div>
    )
}

export default Navbar;