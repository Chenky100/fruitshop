import React, { Component } from 'react'
import '../App.css';

export default class Item extends Component {
    useAdd = () =>{
        this.props.add(this.props.logo, this.props.name, this.props.price);
    }
    render() {
        return (
            
            <div class="row ">
                <div class="col-1 "></div>
                <div class="col-1 "><span className="logo"> {this.props.logo} </span></div>

                <div class="col-3 co"><span className="name"> {this.props.name} </span></div>
                <div class="col-3"></div>

                <div class="col-2 co "><span><span className="price"> {this.props.price}$ </span></span></div>
                <div class="col-1 "><span className="addText"> </span> <button onClick={this.useAdd} className="addButton"> + </button> </div>

            </div>
        )
    }
}
