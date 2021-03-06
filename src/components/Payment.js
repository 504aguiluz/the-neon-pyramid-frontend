import React from 'react';

function Payment(props) {
    return (

        <React.Fragment>
        {props.paymentOpen && 
            <div className="component payment">
                <div className='payment-header'>
                    <h1>PAYMENT
                    <button
                    className='x all-btns'
                    onClick={()=>{props.togglePaymentForm()}}
                    >x</button>
                    </h1>
                </div>
                <div className="payment-form-cont">
                    <form 
                    onSubmit={props.handleEditSubmit}
                    className='payment-form'
                    >
                        <label>enter payment info</label>
                        <input
                            name="firstName" placeholder='first name' 
                            className='input first-name-input'
                        />
                        <input
                            name="lastName" placeholder='last name' 
                            className='input last-name-input'
                        />
                        <input
                            name="cc_num" placeholder='xxxx-xxxx-xxxx-xxxx' 
                            className='input cc-num-input'
                        />
                        <input
                            name="cc_exp" placeholder='mm/yy' 
                            className='input exp-date-input'
                        />
                        <input
                            name="cc_sec_code" placeholder='xxxx' 
                            className='input cc-sec-code-input'
                        />
                        <p>total: €¥<b>{props.currentOrderTotal}</b></p>
                        <button
                            className='complete-btn all-btns'
                            id={props.currentOrderId}
                            onClick={()=>{props.checkout()}}
                            >
                            <b>complete order</b>
                    </button>
                    </form>
                </div>
            </div>
        }
        </React.Fragment>

    );
}

export default Payment;