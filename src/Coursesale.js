import React, { Component } from 'react'

export default class Coursesale extends Component {
    sumPrice(price){
        this.setState({
            total: this.state.total + price
        })
    }
    constructor(props) {
        super(props)
    
        this.state = {
             total: 0
        }
    }
  
    
    render() {
        var courses = this.props.items.map((item, index)=>{
            return <Course name={item.name} price={item.price} key={index} sumPrice={this.sumPrice} active={item.active}/>
        })
        return (
            <div>
              {courses}  
              <p>Total:{this.state.total}</p>
            </div>
        )
    }
}
class Course extends Component {
    clicker=()=>{
      
      this.setState({
            active: !this.props.active
       
      })
      this.props.sumPrice(this.props.price)
    }
    constructor(props) {
        super(props)
    
        this.state = {
             active: false
        }
    }
    
    render() {
        return (
            <div>
                <p onClick={this.clicker}>{this.props.name}</p><b>{this.props.price}</b>
       
            </div>
        )
    }
}

