import React from 'react';

function Logo(props) {
    return (
        <React.Fragment>
        {props.logoOpen &&
            <div className="component logo">
                <h1 className='logo-title'>THE NEON PYRAMID</h1>
            <div className='logo-subtext'>
                <h5>modern neosakan soul food</h5>
                <br/>
                <small>address: neosaka.sector.239873.bldg.49872.suite.14</small>
                <br/>
                <small>phone: 517.395.1163.6273</small>
            </div>
            </div>
        }
        </React.Fragment>
    );
}

export default Logo;