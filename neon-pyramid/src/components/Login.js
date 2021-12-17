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
                className='input-register'
                type='text' 
                id='name' 
                name='username' />
                <br/>
                <label htmlFor='name'>password:</label>
                <br/>
                <input 
                className='input-register'
                type='text' 
                id='name' 
                name='password' />
                <br/>
                <br/>
                <input 
                className='submit-btn all-btns'
                type='submit' value='login' />
            </form>
            <button
                className='open-register-btn all-btns'
                id={props.currentOrderId}
                onClick ={()=>{props.toggleRegisterForm()}}
                >
                register
            </button>
                <br/>
            <button
                className='all-btns'
                id={props.currentOrderId}
                onClick={()=>{props.toggleMenu()}}
                >
                <b>x</b>
            </button>
                <br/>
        </div>
                }
        </React.Fragment>
    );
} 

export default Login;