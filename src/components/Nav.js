import React from 'react';

function Nav(props) {
    return (
        <React.Fragment>
            <div className="component nav">
                <div className="nav-item">
                    <b onClick ={()=>{props.toggleRegisterForm()}}>register</b>
                </div>
                {props.userLoggedIn && 
                <div className="nav-item">
                    <b onClick ={()=>{props.logoutUser()}}>logout</b>
                        
                </div>
                }
                { !props.userLoggedIn && 
                <div className="nav-item">
                    <b onClick ={()=>{props.toggleLoginForm()}}>login</b>
                </div>
                } 
                <div className="nav-item">
                    <b onClick ={()=>{props.toggleLogo()}}>home</b>
                </div>
                    
                <div className="nav-item">
                    <b onClick ={()=>{props.toggleMenu()}}>menu</b>
                </div>
                </div>
                
        </React.Fragment>
    );
}

export default Nav;