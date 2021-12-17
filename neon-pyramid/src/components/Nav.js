import React from 'react';

function Nav(props) {
    return (
        <React.Fragment>
            <div className="component nav">
                <div className="nav-item">
                    {/* <b><span>___________</span></b> */}
                    <b onClick ={()=>{props.toggleRegisterForm()}}>register<span>___________</span></b>
                </div>
                {props.userLoggedIn && 
                <div className="nav-item">
                    <b onClick ={()=>{props.logoutUser()}}>logout<span>___________</span></b>
                        
                </div>
                }
                { !props.userLoggedIn && 
                <div className="nav-item">
                    <b onClick ={()=>{props.toggleLoginForm()}}>login<span>___________</span></b>
                </div>
                }
                
                <div className="nav-item">
                    <b onClick ={()=>{props.toggleLogo()}}>info<span>___________</span></b>
                </div>
                    
                <div className="nav-item">
                    <b onClick ={()=>{props.toggleMenu()}}>menu<span>___________</span></b>
                </div>
                </div>
                
        </React.Fragment>
    );
}

export default Nav;