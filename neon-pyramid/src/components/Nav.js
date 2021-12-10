import React from 'react';

function Nav(props) {
    return (
        <React.Fragment>
            <div className="component nav">
                
                <p onClick ={()=>{props.toggleRegisterForm()}}>register<span>___________</span></p>
                {props.userLoggedIn && 
                <div>
                    <p onClick ={()=>{props.logoutUser()}}>logout<span>___________</span></p>
                    
                </div>
                }
                { !props.userLoggedIn && 
                <div>
                    <p onClick ={()=>{props.toggleLoginForm()}}>login<span>___________</span></p>
                </div>
                }
                <p onClick ={()=>{props.toggleOrderForm()}}>order</p>
                

            </div>
        </React.Fragment>
    );
}

export default Nav;