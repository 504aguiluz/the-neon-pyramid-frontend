import React from 'react';

function Register(props) {
    return (
        <React.Fragment>
        
        {props.registerOpen &&
        <div className="component register">
            <h1>REGISTER</h1>
            <form onSubmit={props.register}>
                <label htmlFor='name'>username:</label>
                <br/>
                <input 
                className='input'
                type='text' 
                id='name' 
                placeholder='8-20 characters'
                name='username' 
                />
                <br/>
                <label htmlFor='name'>password:</label>
                <br/>
                <input 
                className='input'
                type='text' 
                id='name' name='password' />
                <br/>
                <label htmlFor='name'>email:</label>
                <br/>
                <input 
                className='input'
                placeholder="xxx@xxxx.com"    
                type='text' 
                id='name' name='email' />
                <br/>
                <label htmlFor='name'>phone number:</label>
                <br/>
                <input 
                className='input'
                type='text' 
                placeholder="xxx-xxx-xxxx"    
                id='name' name='phone_num' />
                <br/>
                <label htmlFor='name'>address:</label>
                <br/>
                <input 
                className='input'
                type='text' 
                placeholder="xxxx street, city sector, sector code"    
                id='name' name='address' />
                <br/>
                <br/>
                {/* <h4>PAYMENT INFO </h4>
                <small>*required</small>
                <br/>
                <br/>
                <label htmlFor='name'>cc #:</label>
                <br/>
                <input 
                placeholder="xxxx-xxxx-xxxx-xxxx"    
                className='input'
                type='text' 
                id='name' name='payment_info.cc_num'/>
                <br/>
                <label htmlFor='name'>cc exp:</label>
                <br/>
                <input 
                className='input'
                placeholder="mm/yyyy"    
                type='text' 
                id='name' name='payment_info.cc_exp'/>
                <br/>
                <label htmlFor='name'>cc sec code:</label>
                <br/>
                <input 
                placeholder="xxx"    
                className='input'
                type='text' 
                id='name' name='payment_info.cc_sec_code'/>
                <br/>
                <br/> */}
                <input 
                className='submit-btn'
                type='submit' 
                value='register' />
                <br/>
                <br/>
            </form>
        </div>
            }
        </React.Fragment>
    );
} 

export default Register;