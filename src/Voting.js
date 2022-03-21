import React, { Component } from 'react'
import './Voting.css'

export class Voting extends Component {
  state={
  C:0,
  C2:0,
  JAVA:0,
  PYTHON:0,
  onsubmit:false
  }

  handleC=()=>{
    this.setState({C:this.state.C+1})
  }
  handleC2=()=>{
    this.setState({C2:this.state.C2+1})
  }
  handleJava=()=>{
    this.setState({JAVA:this.state.JAVA+1})
  }
  handlePython=()=>{
    this.setState({PYTHON:this.state.PYTHON+1})
  }
  render() {
    return (
      <div className='vot'>
      <h1><center><label><div className="vo">Voting</div></label></center></h1>
      <div className='pp'>
       <h3><label>C: {this.state.C}</label></h3>
       <button onClick={this.handleC}>vote</button></div>
       <div className='hh'>
       <h3><label>C++: {this.state.C2}</label></h3>
       <button onClick={this.handleC2}>vote</button></div>
       <div className='qq'>
       <h3><label>JAVA : {this.state.JAVA}</label></h3>
       <button onClick={this.handleJava}>vote</button></div>
       <div className='tt'>
         <h3><label>PYTHON : {this.state.PYTHON}</label></h3>
         <button onClick={this.handlePython}>vote</button></div>





     </div>     
       
    )
  }
}

export default Voting