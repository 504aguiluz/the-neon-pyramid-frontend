import React from 'react';

function Logo(props) {
    return (
        <React.Fragment>
        {props.logoOpen &&
            <div className="component logo">
                <h1>THE NEON PYRAMID</h1>
                {/* <img className="logo-img" src="https://i.imgur.com/lmJvrWv.jpg" alt="logo-pic"/> */}
            </div>
        }
        </React.Fragment>
    );
}

export default Logo;