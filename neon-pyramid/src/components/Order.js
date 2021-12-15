import React from 'react';

function Order(props) {
    console.log(`props: ${JSON.stringify(props.orders[props.currentOrderId-1])}`)
    console.log(`current_order_id: ${props.currentOrderId}`)
    return (
        <React.Fragment>
        {props.orderOpen &&

        <div className="component order">
            
            <div>
                <h1>ORDER</h1>
                <em>total: €¥ {props.currentOrderTotal}</em>
            </div>
            <br/>
            <br/>
            <div className='all-ordered-dishes'>
            <h4>apps</h4>
                {props.orderedDishes.map((orderedDish, i) => {
                    if(orderedDish.dish.category === 'app') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                {/* <br/>   */}
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
                                {/* <br/>   */}
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
                                {/* <br/> */}
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
                                {/* <br/>   */}
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
                <h4>total: €¥ {props.currentOrderTotal}</h4>

                <button
                className='checkout-btn'
                id={props.currentOrderId}
                onClick={()=>{props.checkout()}}
                >
                checkout
                </button>

            </div>
        </div>
        
        }
        </React.Fragment>
    );
}

export default Order;