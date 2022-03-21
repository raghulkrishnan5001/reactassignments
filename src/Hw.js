import React, { Component } from 'react'
import './Hw.css'

class Hw extends Component {

    state={
        name:'welcome'

    }
  handlechange=()=>{
      if(this.state.name == 'welcome'){
         this.setState({name:"hello world"})
        }
      else {
        this.setState({name:'welcome'})  
      }
    }
  render() {
    return (
      <div className='pad'>
          {this.state.name}
          <button onClick={this.handlechange}>CHANGE</button>
      </div>
    )
  }
}
export default Hw