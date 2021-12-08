import React from 'react';

function Menu(props) {
    // console.log('props.dishes[0].title: '+ props.dishes[0].title)
    return (
        <div className="component menu">
            <h1>MENU</h1>
            <div className="menu-items">
                <h3>DRINKS</h3>

                    {props.dishes.map((dish, i) => {
                        if(dish.category === 'bev'){
                            return(
                                <div key={i}>
                                    <br/>
                                    <img className="menu-img bev-img" src={dish.image} alt="beverage pic"/>
                                    <br/>
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                    <small>{dish.description}</small>
                                </div>
                            )
                        }
                    })
                    }
                    <br/>
                    <br/>
                <h3>APPS</h3>
                    <br/>
                    {props.dishes.map((dish, i) => {
                        if(dish.category === 'app'){
                            return(
                                <div key={i}>
                                    <br/>       
                                    <img className="menu-img app-img" src={dish.image} alt="app pic"/>     
                                    <br/>       
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                        <small>{dish.description}</small>
                                </div>
                            )
                        }
                    })
                    }
                    <br/>
                    <br/>
                <h3>ENTREÉS</h3>
                    <br/>
                    {props.dishes.map((dish, i) => {
                        if(dish.category === 'entree'){
                            return(
                                <div key={i}>
                                    <br/>       
                                    <img className="menu-img entree-img" src={dish.image} alt="entree pic"/>     
                                    <br/>       
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                    <small>{dish.description}</small>
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
                                <div key={i}>
                                    <br/>       
                                    <img className="menu-img dessert-img" src={dish.image} alt="dessert pic"/>     
                                    <br/>       
                                    <b>{dish.title}________€¥{dish.price}</b><br/>
                                    <small>{dish.description}</small>
                                </div>
                            )
                        }
                    })
                    }
            </div>
        </div>
    );
}

export default Menu;