import './App.css';
import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Menu from './components/Menu';
// import Dish from './components/Dish';
import Order from './components/Order';
// import Payment from './components/Payment';


let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
      phone_num: '',
      address: '',
      payment_info: {},
      userLoggedIn: false,
      registerOpen: false,
      loginOpen: false,
      orderOpen: false,
      paymentOpen: false,
      orders: [],
      dishes: [],
      currentOrderId: null,
      orderedDishes: [],
      orderEmpty: true,
      currentOrderedDishId: null,
      currentOrderTotal: 0,
    }
  }

  register = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch(baseUrl + '/users/register', {
        method: 'POST',
        body: JSON.stringify({
          email: e.target.email.value,
          username: e.target.username.value,
          password: e.target.password.value,
          phone_num: e.target.phone_num.value,
          address: e.target.address.value,
          cc_num: '',
          cc_exp: '',
          cc_sec_code: '',
          // cc_num: e.target.cc_num.value,
          // cc_exp: e.target.cc_exp.value,
          // cc_sec_code: e.target.cc_sec_code.value,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 200) {
        this.getDishes()
        // this.getOrders()
      }
    }
    catch(err) {
      console.log('Error => ', err)
      console.log('😖 register failed 😖')
    }
  }
  
  loginUser = async (e) => {
    e.preventDefault()
    this.getOrders()
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    try {
      const response = await fetch(baseUrl + '/users/login', {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      console.log(response)
      console.log('BODY: ', response.body)

      if(response.status === 200){
        this.getDishes()
        console.log('🥳 login successful! 🥳')
        this.setState({
          // need to populate the rest of state for users
          username: e.target.username.value,
          password: e.target.password.value,
          userLoggedIn: true,
          loginOpen: false,
          })
        this.newOrder()
      }
    }
    catch(err){
      console.log('Error => ', err)
      console.log('😖 login failed 😖')
    }
  }

  logoutUser = () => {
    console.log('hit logout button')
    fetch(baseUrl + '/users/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => {
      console.log(res.status)
      console.log('🧨 logout successful! 🧨')
      this.setState({
        userLoggedIn: false,
        orderOpen: false,
      })
    })
    console.log(this.state)
  }

  getDishes = () => {
    console.log('hit getDishes')
    fetch(baseUrl + '/dishes/', {
      credentials: 'include'
    })
    .then (res => {
      if(res.status === 200) {
        console.log('🥡 fetch index dishes successful! 🥡')
        return res.json()
      } else {
        console.log('fetch index dishes failed...💣')
        return[]
      }
    })
    .then(data => {
      this.setState({
        dishes: data.data
      })
      // console.log('new data: ' + JSON.stringify(data.data))
    })
  }

  getOrders = () => {
    console.log('hit getOrders')
    fetch(baseUrl + '/orders/', {
      credentials: 'include'
    })
    .then (res => {
      if(res.status === 200) {
        console.log('📝 fetch index orders successful! 📝')
        return res.json()
      } else {
        console.log('fetch index orders failed...💣')
        return[]
      }
    })
    .then(data => {
      this.setState({
        orders: data.data
      })
      console.log('new data: ' + JSON.stringify(data.data))
    })
  }

  newOrder = async () => {
    console.log('hit newOrder')

    try{
      const response = await fetch(baseUrl + '/orders/', {
        method: 'POST',
        body: JSON.stringify({
          total: 0.0,
        }),
        headers: {
          'Content-Type': 'application/json'
        }, 
        credentials: 'include'
      })
      
      console.log(response.status)

      if(response.status === 201){
        console.log('new order created!')
        const newOrder = await response.json()
        console.log('new order :' + newOrder)
        this.getOrders()
        const copyOrders = [...this.state.orders]
        copyOrders.push(newOrder)
        this.setState({
          orders: copyOrders,
          currentOrderId: newOrder.data.id,
          orderOpen: true,
        })
        console.log('newOrder: ' + JSON.stringify(newOrder))
        console.log('newOrderID: ' + JSON.stringify(newOrder.data.id))
      }
    }
    catch(err){
      console.log('Error -> ', err)
      console.log('order not created...')
    }
    
  }

  sumOrderedDishPrices = () => {
    
  const dishes = this.state.orderedDishes
  const total = dishes.reduce((total, obj) => obj.dish.price + total, 0)
  console.log(total)

  this.setState({
    currentOrderTotal: total,
  })

  }

  addDishToOrder =(order_id, dish_id)=> {
    console.log( 'order id:',order_id, 'dish id:',dish_id)
    fetch(baseUrl + '/ordered_dishes/' + order_id + '/' + dish_id + '/', {
      method: 'POST',
      credentials: 'include',
    })
    .then(res => {
      if(res.status === 200){
        console.log('dish added to order!')
        return res.json()
      } else {
        console.log('dish was not added...')
        return []
      }
    })
    .then(data => {
      console.log(data)
      const copyOrderedDishes = [...this.state.orderedDishes, data.data]
      console.log(copyOrderedDishes[copyOrderedDishes.length-1])


      this.setState({
        currentOrderId: order_id,
        orderedDishes: copyOrderedDishes,
        currentOrderedDishId: copyOrderedDishes[copyOrderedDishes.length-1].id,
        currentOrderTotal: null,
      })
      // this.updateOrderedDish(order_id, dish_id, this.state.currentOrderedDishId)
    })
    .then(()=>{
      this.sumOrderedDishPrices()
    })
  }


  updateOrderedDish = (order_id, dish_id, ordered_dish_id) => {
    console.log(`order id: ${order_id}, dish id: ${dish_id}, ordered_dish_id: ${ordered_dish_id}` )

    fetch(baseUrl + '/ordered_dishes/' + order_id + '/' + dish_id + '/' + ordered_dish_id, { 
      method: 'PUT',
      credentials: 'include'
    })

    .then(res => {
      if(res.status === 200){
        console.log('ordered dish updated!')
        return res.json()
      } else {
        console.log('dish was not updated...')
        return []
      }
    })

    .then(data => {
      const updatedOrderedDish = data.data
      console.log(updatedOrderedDish)
      const findIndex = this.state.orderedDishes.findIndex(orderedDish => orderedDish.id === updatedOrderedDish.id)
      const copyOrderedDishes = [...this.state.orderedDishes]
      copyOrderedDishes[findIndex] = updatedOrderedDish
      this.setState({
        orderedDishes: copyOrderedDishes
      })
    })
    
        }

  toggleRegisterForm = () => {
    this.setState({
      registerOpen: !this.state.registerOpen,
    }, ()=>console.log('registerOpen after set state: ' + this.state.registerOpen)
    )
    console.log('toggleRegisterForm clicked')
  }

  toggleLoginForm = () => {
    this.setState({
      loginOpen: !this.state.loginOpen,
    }, ()=>console.log('loginOpen after set state: ' + this.state.loginOpen)
    )
    console.log('toggleLoginForm clicked')
  }
  
  toggleOrderForm = () => {
    this.setState({
      orderOpen: !this.state.orderOpen,
    }, ()=>console.log('orderOpen after set state: ' + this.state.orderOpen)
    )
    console.log('toggleOrderForm clicked')
  }

  checkout = () => {
    console.log('hit checkout button!')
  }

  componentDidMount(){
    this.getDishes()
  }
  
  render(){
    
    return (
      <div className="App">
      <Nav 
        toggleRegisterForm={this.toggleRegisterForm}
        registerOpen={this.state.registerOpen}
        toggleLoginForm={this.toggleLoginForm}
        loginOpen={this.state.loginOpen}
        toggleOrderForm={this.toggleOrderForm}
        orderOpen={this.state.orderOpen}
        logoutUser={this.logoutUser}
        userLoggedIn={this.state.userLoggedIn}
      />
      <Logo />

      <Register 
        register={this.register}
        registerOpen={this.state.registerOpen}
      />
      <Login 
        loginUser={this.loginUser}
        loginOpen={this.state.loginOpen}
      />

      <div className="bottom-container">
        <Menu 
          dishes = {this.state.dishes}
          currentOrderId = {this.state.currentOrderId}
          addDishToOrder = {this.addDishToOrder}
        />
        <Order 
          orderOpen={this.state.orderOpen}
          orderedDishes={this.state.orderedDishes}
          orderedDishQty={this.state.orderedDishQty}
          currentOrderId={this.state.currentOrderId}
          orders={this.state.orders}
          currentOrderTotal={this.state.currentOrderTotal}
          checkout={this.checkout}
        />
      </div>
        {/* {this.paymentOpen &&  */}
        {/* <Payment /> */}
        {/* } */}
    </div>
    );
  }
}

export default App;
