import React from 'react';

function Menu(props) {
    // console.log('props.dishes[0].id: '+ props.dishes[0].id)
    return (
        <div className="component menu">
            <h1>MENU</h1>
            <div className="all-menu-items">
                <h3>APPS</h3>
                    {props.dishes.map((dish, i) => {
                        if(dish.category === 'app'){
                            return(
                                <div key={i} className="menu-item" onClick={()=>{props.addDishToOrder(props.currentOrderId, dish.id)}}>
                                    <br/>       
                                    <img className="menu-img app-img" src={dish.image} alt="app pic"/>     
                                    <br/>       
                                    {/* <div id="sample" onclick="this.style.width = '200px';"></div> */}
                                    {/* <p>id: {dish.id}</p> */}
                                    {/* <p>key: {i}</p> */}
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                        <p>{dish.description}</p>
                                    <br/>
                                    <small>[click to add]</small>
                                    <br/>       
                                    <br/>       
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
                                <div key={i} className="menu-item">
                                    <br/>       
                                    <img className="menu-img entree-img" src={dish.image} alt="entree pic"/>     
                                    <br/>       
                                    {/* <p>id: {dish.id}</p> */}
                                    {/* <p>key: {i}</p> */}
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                    <small>{dish.description}</small>
                                    <br/>
                                    <button 
                                    className="add-btn all-btns"
                                    id={dish.id}
                                    onClick={()=>{props.addDishToOrder( props.currentOrderId, dish.id)}}
                                    >+</button>
                                    <small>add to order</small>
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
                                <div key={i} className="menu-item">
                                    <br/>       
                                    <img className="menu-img dessert-img" src={dish.image} alt="dessert pic"/>     
                                    <br/>       
                                    {/* <p>id: {dish.id}</p> */}
                                    {/* <p>key: {i}</p> */}
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                    <small>{dish.description}</small>
                                    <br/>
                                    <button 
                                    className="add-btn all-btns"
                                    id={dish.id}
                                    onClick={()=>{props.addDishToOrder(props.currentOrderId, dish.id)}}
                                    >+</button>
                                    <small>add to order</small>
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
                                <div key={i} className="menu-item">
                                    <br/>
                                    <img className="menu-img bev-img" src={dish.image} alt="beverage pic"/>
                                    <br/>
                                    {/* <p>id: {dish.id}</p> */}
                                    {/* <p>key: {i}</p> */}
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                    <br/>
                                    <small>{dish.description}</small>
                                    <br/>
                                    <button 
                                    className="add-btn all-btns" 
                                    id={dish.id}
                                    onClick={()=>{props.addDishToOrder(props.currentOrderId, dish.id)}}
                                    >+</button>
                                    <span>   </span><small>add to order</small>
                                </div>
                            )
                        }
                    })
                    }
                    <br/>
                    <br/>
            </div>
        </div>
    );
}

export default Menu;