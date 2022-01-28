import React from 'react';

function Menu(props) {
    return (
        <React.Fragment>
        {props.menuOpen &&
            <div className="component menu">
                <div className='menu-header'>
                    <h1>MENU</h1>
                </div>
                <div className='menu-spacer'></div>
                <div className="all-menu-items">
                    <h3>APPS</h3>
                        {props.dishes.map((dish, i) => {
                            if(dish.category === 'app'){
                                return(
                                    <div key={i} className="menu-item" onClick={()=>{props.addDishToOrder(props.currentOrderId, dish.id)}}>
                                        <br/>    
                                        <h1 className='plus'>+</h1>
                                        <div>
                                            <img className="menu-img app-img" src={dish.image} alt="app pic"/>     
                                                <br/>
                                                <b>{dish.title}________€¥ {dish.price}</b>
                                                <br/>
                                                <br/>
                                                    <p>{dish.description}</p>
                                                <br/>
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                        <br/>
                        <br/>
                    <h3>ENTRÉES</h3>
                        <br/>
                        {props.dishes.map((dish, i) => {
                            if(dish.category === 'entree'){
                                return(
                                    <div key={i} className="menu-item" onClick={()=>{props.addDishToOrder(props.currentOrderId, dish.id)}}>
                                        <br/> 
                                        <h1 className='plus'>+</h1>  
                                        <div>    
                                            <img className="menu-img entree-img" src={dish.image} alt="entree pic"/>     
                                            <div className='menu-text'>
                                                <br/>
                                                <b>{dish.title}________€¥ {dish.price}</b><br/>
                                                    <p>{dish.description}</p>
                                                <br/>
                                            </div>       
                                        </div>       
                                    </div>
                                )
                            }
                        })
                        }
                        <br/>
                        <br/>
                    <h3>DESSERTS</h3>
                        <br/>
                        {props.dishes.map((dish, i) => {
                            if(dish.category === 'dessert'){
                                return(
                                    <div key={i} className="menu-item" onClick={()=>{props.addDishToOrder(props.currentOrderId, dish.id)}}>
                                        <br/> 
                                        <h1 className='plus'>+</h1>  
                                        <div>       
                                            <img className="menu-img dessert-img" src={dish.image} alt="dessert pic"/>     
                                            <div className='menu-text'>
                                                <br/>
                                                <b>{dish.title}________€¥ {dish.price}</b><br/>
                                                    <p>{dish.description}</p>
                                                <br/>
                                            </div>       
                                            <small className='menu-text-appear'>[click to add]</small>
                                            <br/>       
                                            <br/> 
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                    <h3>DRINKS</h3>

                        <br/>
                        {props.dishes.map((dish, i) => {
                            if(dish.category === 'bev'){
                                return(
                                    <div key={i} className="menu-item" onClick={()=>{props.addDishToOrder(props.currentOrderId, dish.id)}}>
                                        <br/> 
                                        <h1 className='plus'>+</h1>  
                                        <div>
                                            <img className="menu-img bev-img" src={dish.image} alt="beverage pic"/>
                                            <div className='menu-text'>
                                                <br/>
                                                <b>{dish.title}________€¥ {dish.price}</b><br/>
                                                    <p>{dish.description}</p>
                                                <br/>
                                            </div>       
                                            <small className='menu-text-appear'>[click to add]</small>
                                            <br/>       
                                            <br/> 
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                        <br/>
                        <br/>
                </div>
            </div>
        }
        </React.Fragment>
    );
}

export default Menu;