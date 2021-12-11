import React from 'react';

function Order(props) {
    // console.log(props.orderedDishes[0])
    return (
        <React.Fragment>
        {props.orderOpen &&

        <div className="component order">
            <h1>ORDER</h1>
            <div className='all-ordered-dishes'>
            <h4>apps</h4>
                {props.orderedDishes.map((orderedDish, i) => {
                    if(orderedDish.category === 'app') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>  
                                <small>({orderedDish.qtyOrdered})</small> 
                                <b>{orderedDish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.price}</small>
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
                    if(orderedDish.category === 'entree') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>  
                                {/* <small>({props.orderedDishQty})</small>  */}
                                <b>{orderedDish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.price}</small>
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
                    if(orderedDish.category === 'dessert') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>
                                {/* <small>({props.orderedDishQty})</small>  */}
                                <b>{orderedDish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.price}</small>
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
                    if(orderedDish.category === 'bev') {
                        return(
                            <div key={i}
                            className='ordered-dish'>
                                <br/>  
                                {/* <small>({props.orderedDishQty})</small>  */}
                                <b>{orderedDish.title}</b>
                                <small className='ordered-dish-price'>€¥{orderedDish.price}</small>
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