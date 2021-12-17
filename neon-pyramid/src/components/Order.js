import React from 'react';

function Order(props) {
    console.log(`props: ${JSON.stringify(props.orders[props.currentOrderId-1])}`)
    console.log(`current_order_id: ${props.currentOrderId}`)
    return (
        <React.Fragment>
        {props.orderOpen &&

        <div className="component order"> 
            <div className='order-header'>
                <h1>ORDER:</h1>
                <div>
                    <small><em>#{props.currentOrderId}</em></small>
                    <br/>
                    <small><em>customer: {props.username}</em></small>
                    <p><em>total: <b>€¥ {props.currentOrderTotal}</b></em></p>
                </div>
            </div>
            <div className='order-spacer'></div>
            <br/>
            <div className='all-ordered-dishes'>
                <h4 className='dish-type'>apps</h4>
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
                <h4 className='dish-type'>entrées</h4>
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
                <h4 className='dish-type'>desserts</h4>
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
                <h4 className='dish-type'>drinks</h4>
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
                    onClick={()=>{props.togglePaymentForm()}}
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