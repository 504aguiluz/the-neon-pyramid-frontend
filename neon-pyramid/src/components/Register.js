import React from 'react';

function Register(props) {
    return (
        <React.Fragment>
        
        {props.registerOpen &&
        <div className="component register">
            <h1>register</h1>
            <form 
            className='register-form'
            onSubmit={props.register}>
                <label htmlFor='name'>username:</label>
                <br/>
                <input 
                className='input-register'
                type='text' 
                id='name' 
                placeholder='8-20 characters'
                name='username' 
                />
                <br/>
                <label htmlFor='name'>password:</label>
                <br/>
                <input 
                className='input-register'
                type='text' 
                id='name' name='password' />
                <br/>
                <label htmlFor='name'>email:</label>
                <br/>
                <input 
                className='input-register'
                placeholder="xxx@xxxx.com"    
                type='text' 
                id='name' name='email' />
                <br/>
                <label htmlFor='name'>phone number:</label>
                <br/>
                <input 
                className='input-register'
                type='text' 
                placeholder="xxx-xxx-xxxx"    
                id='name' name='phone_num' />
                <br/>
                <label htmlFor='name'>address:</label>
                <br/>
                <input 
                className='input-register'
                type='text' 
                placeholder="xxxx street, city sector, sector code"    
                id='name' name='address' />
                <br/>
                {/* <br/> */}
                <input 
                className='submit-btn all-btns'
                type='submit' 
                value='register'/>
                <br/>
                <br/>
            <button
                className='x reg-btn all-btns'
                id={props.currentOrderId}
                onClick={()=>{props.toggleMenu()}}
                >
                <b>x</b>
            </button>
            </form>
        </div>
            }
        </React.Fragment>
    );
} 

export default Register;