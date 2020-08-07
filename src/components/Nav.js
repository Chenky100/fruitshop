import React, { Component } from 'react'

export default class Nav extends Component {

    useClear = () =>{
        this.props.clear();
    }
    useToHome = () =>{
        this.props.toHome();
    }
    useToCart = () =>{
        this.props.toCart();
    }
    useToShop = () =>{
        this.props.toShop();
    }

    render() {
        return (
            <div>
                <div className="btnbox">
                    <button className="navbtn" onClick={this.useToHome}> Home </button>
                </div>
                <div className="btnbox">
                    <button className="navbtn" onClick={this.useToShop} > Shop </button>
                </div>
                <div className="btnbox">
                    <button className="navbtn" onClick={this.useToCart}> Cart </button>
                </div>    
                <div className="btnbox">
                    <button className="navbtn" > Sign in </button>
                </div>   
                <div className="btnbox">
                    <button className="navbtn" onClick={this.useClear}> Clear </button>
                </div>         
            </div>
        )
    }
}
