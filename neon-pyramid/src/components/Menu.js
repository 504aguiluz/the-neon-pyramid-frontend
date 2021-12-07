import React from 'react';

function Menu(props) {
    // console.log('props.dishes[0]: '+ props.dishes[0].title)
    return (
        <div className="component menu">
            <h1>MENU</h1>
            <div className="menu-items">
                <h3>DRINKS</h3>
                {props.dishes[0].title}
                <h3>APPS</h3>
                <h3>ENTREÉS</h3>
                <h3>DESSERTS</h3>
            </div>
        </div>
    );
}

export default Menu;