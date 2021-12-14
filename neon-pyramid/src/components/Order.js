import React from 'react';

function Order(props) {
    console.log(`props: ${props}`)
    return (
        <React.Fragment>
        {props.orderOpen &&

        <div className="component order">
        
            <h1>ORDER</h1>
            <div className='all-ordered-dishes'>
            <h4>apps</h4>
                {props.orderedDishes.map((orderedDish, i) => {
                    if(orderedDish.dish.category === 'app') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>  
                                <small>({orderedDish.qtyOrdered})</small> 
                                <b>{orderedDish.dish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.dish.price}</small>
                                <br/>  
                            </div>
                        )
                    }
                }
                )}
                <br/>
                <br/>
            <h4>entrées</h4>
                {props.orderedDishes.map((orderedDish, i) => {
                    if(orderedDish.dish.category === 'entree') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>  
                                <small>({orderedDish.qtyOrdered})</small>
                                <b>{orderedDish.dish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.dish.price}</small>
                                <br/>  
                            </div>
                        )
                    }
                }
                )}
                <br/>
                <br/>
            <h4>desserts</h4>
                {props.orderedDishes.map((orderedDish, i) => {
                    if(orderedDish.dish.category === 'dessert') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>
                                <small>({orderedDish.qtyOrdered})</small>
                                <b>{orderedDish.dish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.dish.price}</small>
                                <br/>  
                            </div>
                        )
                    }
                }
                )}
                <br/>
                <br/>
            <h4>drinks</h4>
                {props.orderedDishes.map((orderedDish, i) => {
                    if(orderedDish.dish.category === 'bev') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>  
                                <small>({orderedDish.qtyOrdered})</small>
                                <b>{orderedDish.dish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.dish.price}</small>
                                <br/>  
                            </div>
                        )
                    }
                }
                )}
                <br/>
                <br/>

            </div>
        </div>
        
        }
        </React.Fragment>
    );
}

export default Order;