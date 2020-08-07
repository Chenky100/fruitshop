import React, { Component } from 'react';
import logo from './logo.svg';

import Item from './components/Item';
import Nav from './components/Nav';
import Home from './components/Home';

function Header(props){
  return(
    <div className="headbox">
      <header className="header">
        <span onClick={props.toHome} className="home">⌂</span><span className="htext">🍓Fruit🍍Shop🍇</span> <span className="shopcart" onClick={props.toCart}>🛒</span>
      </header>
    </div>
      
  );
  
    
}

const itemList = [
  {logo:'🍎', name:' Apple', price:3, id: 1},
  {logo:'🍌', name:'Banana', price:4, id: 2},
  {logo:'🍉', name:'Watermelon', price:11, id: 3},
  {logo:'🍍', name:'Pineapple', price:8, id: 4},
  {logo:'🍇', name:'Grapes', price:5, id: 5},
  {logo:'🥝', name:'Kiwi', price:4, id: 6},
  {logo:'🍈', name:'Melon', price:6, id: 7},
  {logo:'🍓', name:'Strawberry', price:12, id: 8},
  {logo:'🍐', name:'Pear', price:2, id: 9},
  {logo:'🥥', name:'Coconut', price:9, id: 10},
  {logo:'🍒', name:'Cherries', price:13, id: 11},
  {logo:'🍋', name:'Lemon', price:6, id: 12},
  {logo:'🥭', name:'Mango', price:12, id: 13}, 
  {logo:'🍑', name:'Peach', price:7, id: 14},
   
  
  
  ];


  

  function DispCart(props) {
    return(
     <div>
      { props.items.map((element)=>{
         
         return <CartItem logo={element.logo} remove={props.remove} name={element.name} price={element.price} amount={element.amount} key={element.id} id={element.id}/>
       })}
        <div class="row ">
                <div class="col-1 co"><span>  # </span></div>
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-3 co"><span className="name he"> Item </span></div>
                <div class="col-3"></div>

                <div class="col-3 co "><span><span className="price he"> Price </span></span></div>
            </div>
           
           
           
            
      
     <div class="row r2">
                <div className="col-1 co"><span>   </span></div>
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-2 co"><span className="name he">  </span></div>
                <div class="col-4 co alignRight">Subtotal ({props.counter} items):</div>

                <div class="col-1 co "><span><span className="price he"> {props.total}$ </span></span></div>
            </div>
            <div class="row r2">
                <div className="col-1 co"><span>   </span></div>
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-2 co"><span className="name he">  </span></div>
                <div class="col-4 co alignRight"></div>

                <div class="col-3 co "><span><span className="price he">  </span></span></div>
            </div>
            <div class="row r2">
                <div className="col-1 co"><span>   </span></div>
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-2 co"><span className="name he">  </span></div>
                <div class="col-4 co alignRight shit">Shipping</div>

                <div class="col-1 co "><span><span className="shit"> 20$  </span></span></div>
            </div>
            <div class="row r2">
                <div className="col-1 co"><span>   </span></div>
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-2 co"><span className="name he">  </span></div>
                <div class="col-4 co alignRight shit">Handaling</div>

                <div class="col-1 co shit"><span><span className="shit"> 5$  </span></span></div>
            </div>
            <div class="row r2">
                <div className="col-1 co"><span>   </span></div>
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-2 co"><span className="name he">  </span></div>
                <div class="col-4 co alignRight"></div>

                <div class="col-3 co shit"><span><span className="shit"> {props.total}$ + 20$ + 5$ = {props.total + 20 + 5}$  </span></span></div>
            </div>
            <div class="row ">
                <div className="col-1 co"><span>   </span></div>
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-2 co"><span className="name he">  </span></div>
                <div class="col-4 co alignRight shit">Tax 17%</div>

                <div class="col-3 co shit"><span><span className="shit"> {props.total + 20 + 5}$ + {((props.total+ 20 + 5) *0.17).toFixed(2)}$  =</span></span></div>
            </div>
            <div class="row r2">
                <div className="col-1 co"><span>   </span></div>
                <div class="col-1 "></div>  
                <div class="col-1 "><span className="logo"> </span></div>

                <div class="col-6 co alignRight gt">Grand Total (including Tax):</div>

                <div class="col-3 co  "><span><span className="price he"> {(((props.total + 20 + 5)*0.17) +(props.total + 20 + 5)).toFixed(2)}$    </span></span></div>
            </div>

     </div>
    );
    
  }

  class CartItem extends Component {

     useRemove = ()=>{
       this.props.remove(this.props.id, this.props.price);
       
        
    }
    render(){
      return(
        
        
        <div class="row ">
                <div class="col-1 co r"><button onClick={this.useRemove} className="removeButton">  ✖ </button></div>
          
          
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> {this.props.logo} </span></div>

                <div class="col-3 co"><span className="name"> {this.props.name} </span></div>
                <div class="col-3"></div>

                <div class="col-3 co "><span><span className="price"> {this.props.price}$ </span></span></div>
            </div>
           
        
      );
    }

  }
  function MainWin(props) {
    if(props.home){
      return(
        <div className="shopbox">
         <Home />
         
        </div>
        
       
      );
    }
     if(props.cart){
      return(
        <div className="shopbox">
          <h3>Cart:</h3>
          <DispCart remove={props.remove} items={props.cartItems} counter={props.counter} total={props.total} count={props.counter} />
        </div>
        
      );
    }
     if(props.shop){
      return(
        <div className="shopbox">
          <h3> Welcome To Fruit Shop</h3> 
          {
        itemList.map((element)=>{
          
           return <Item add={props.add}  logo={element.logo} name={element.name} price={element.price} key={element.id} id={element.id}/>
        })  
          }
        </div>
        
       
      );
    }
  }


class App extends Component {
   
  state = {
    cartItems: [{logo:'🍊', name:'Tangerine FREE', price:0,amount:1, id:0}],
    counter: (1),
    totalPrice: 0,
    home: true,
    shop:false,
    cart: false
  }

  changeToCart = ()=>{
    this.setState({home: false, shop:false, cart:true})
  }
  changeToShop = ()=>{
    this.setState({home: false, shop:true, cart:false})
  }
  
  changeToHome = ()=>{
    this.setState({home: true, shop:false, cart:false})
  }
  
  addItem = (l,n,p) =>{
    this.setState({counter: this.state.counter +1})
    this.setState({cartItems: [...this.state.cartItems, {logo:l, name:n, price:p,amount:1,id: this.state.counter }]})
    this.setState({totalPrice: this.state.totalPrice + p})
  }
  
  removeItem = (id,p) =>{    
    this.setState( prevState => {
      return {
        cartItems: prevState.cartItems.filter(p => p.id !== id)
      };
    });
    this.setState({totalPrice: this.state.totalPrice - p})
    this.setState({counter: this.state.counter - 1})
  }

  resetCart = () =>{
    this.setState({cartItems: [{logo:'🍊', name:'Tangerine FREE', price:0,amount:1, id:0}]})

    this.setState({ counter: (1) })
    this.setState({ totalPrice: 0 })
    // this.setState({ home: true })

  }
  
  render(){
    return (
      <div className="App">
        <Header toCart={this.changeToCart} toHome={this.changeToHome} />  
  
        <div className="mainWindow">
          <MainWin 
           add={this.addItem} 
           remove={this.removeItem}
          cartItems={this.state.cartItems} 
          total={this.state.totalPrice} 
          counter={this.state.counter} 
          home={this.state.home} 
          shop={this.state.shop} 
          cart={this.state.cart} />
        </div>
  
        <div className="sideWindow">
        <h1></h1>
          <Nav toCart={this.changeToCart} toShop={this.changeToShop} toHome={this.changeToHome} clear={this.resetCart} />
          <div >
          <span>Items in cart: </span><span> {this.state.counter} </span>
          </div>
          
          <span>Total Price: </span><span> {this.state.totalPrice} $ </span>
        </div>
       
  
      </div>
    );
  }
  
}

export default App;
