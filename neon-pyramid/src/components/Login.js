import React from 'react';

function Login(props) {
    console.log('before return loginOpen: ' + props.loginOpen)
    return (
        <React.Fragment>

        {props.loginOpen && 
        <div className="component login">
                <h1>LOGIN</h1> 
            <form onSubmit={props.loginUser}>
                <label htmlFor='name'>username:</label>
                <br/>
                <input 
                className='input'
                type='text' 
                id='name' name='username' />
                <br/>
                <label htmlFor='name'>password:</label>
                <br/>
                <input 
                className='input'
                type='text' 
                id='name' name='password' />
                <br/>
                <br/>
                <input 
                className='submit-btn'
                type='submit' value='login' />
                <br/>
                <br/>
            </form>
        </div>
                }
        </React.Fragment>
    );
} 

export default Login;