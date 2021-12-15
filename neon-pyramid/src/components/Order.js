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
                                <button
                                className='del-btn all-btns'
                                id={orderedDish.id}
                                onClick={()=>{props.deletedOrderedDish(orderedDish.id)}}
                                ><b>-</b></button>
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
                                <button
                                className='del-btn all-btns'
                                id={orderedDish.id}
                                onClick={()=>{props.deletedOrderedDish(orderedDish.id)}}
                                ><b>-</b></button>
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
                                <button
                                className='del-btn all-btns'
                                id={orderedDish.id}
                                onClick={()=>{props.deletedOrderedDish(orderedDish.id)}}
                                ><b>-</b></button>
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
                                <button
                                className='del-btn all-btns'
                                id={orderedDish.id}
                                onClick={()=>{props.deletedOrderedDish(orderedDish.id)}}
                                ><b>-</b></button>
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
                <h4 className='ordered-dish-price'>TOTAL: €¥<b>{props.currentOrderTotal}</b></h4>

                <button
                className='checkout-btn all-btns'
                id={props.currentOrderId}
                onClick={()=>{props.checkout()}}
                >
                CHECKOUT
                </button>

            </div>
        </div>
        
        }
        </React.Fragment>
    );
}

export default Order;