import React from 'react';

function Menu(props) {
    console.log('props.dishes[0]: '+ props.dishes[0].title)
    return (
        <div className="component menu">
            <h1>MENU</h1>
            <div className="menu-items">
                <h3>DRINKS</h3>
                    <br/>
                    <br/>
                    {props.dishes.map((dish, i) => {
                        if(dish.category === 'bev'){
                            return(
                                <div key={i}>
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