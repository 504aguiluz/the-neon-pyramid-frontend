import React from 'react';

function Order(props) {
    
    return (
        <React.Fragment>
        {props.orderOpen &&

        <div className="component order">
            <h1>ORDER</h1>
        </div>
        
        }
        </React.Fragment>
    );
}

export default Order;