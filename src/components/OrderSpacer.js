import React from 'react';

function OrderSpacer(props) {
    return (
        <React.Fragment>
        {props.orderOpen &&
            <div className="component order-spacer">
            </div>
        }
        </React.Fragment>
    );
}

export default OrderSpacer;