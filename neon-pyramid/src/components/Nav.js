import React from 'react';

function Nav(props) {
    return (
        <div className="component nav">
            
            <span>___________</span>
            <p onClick ={()=>{props.toggleRegisterForm()}}>+ REGISTER</p>
            <span>___________</span>
            <p onClick ={()=>{props.toggleLoginForm()}}>+ LOGIN</p>
            <span>___________</span>
            <p onClick ={()=>{props.toggleOrderForm()}}>+ ORDER</p>
            <span>___________</span>

        </div>
    );
}

export default Nav;