import React, { Component } from 'react'
import './Regbelow.css'

export class Regbelow extends Component {
  state={
    Title:'',
    Firstname:'',
    Lastname:'',
    DATEOFBIRTH:'',
    Email:'',
    password:'',
    confirmpassword:'',
    onSubmit: false
  }
  handlesubmit1=()=>{
    this.setState({ Title:'',
    Firstname:'',
    Lastname:'',
    DATEOFBIRTH:'',
    Email:'',
    password:'',
    confirmpassword:'',})
  }
  handlesubmit=(e)=>{
    this.setState({onSubmit:true})
    if (!this.state.Firstname){
      alert('firstname is mandatory')
    }
  }
  handleTitle=(e)=>{this.setState({Title:e.target.value})}
  handlefirstname=(e)=>{this.setState({Firstname:e.target.value})}
  handleLastname=(e)=>{this.setState({Lastname:e.target.value})}
  handledateofbirth=(e)=>{this.setState({DATEOFBIRTH:e.target.value})}
  handleemail=(e)=>{this.setState({Email:e.target.value})}
  render() 
  {
    return (
      <div className='rg'>
          <div className='ti'>
           <div><label>Title</label>
           <input type='text'  value={this.state.Title}  onChange={this.handleTitle}></input></div>
           <div><label>First name</label>
           <input type='text'   value={this.state.Firstname}  onChange={this.handlefirstname}></input></div>
           <div><label>Last name</label>
           <input type='text' value={this.state.Lastname}  onChange={this.handleLastname}></input></div></div><br/>

           <div className='cl'>
            <div><label>DATE OF BIRTH</label>
            <input type="date" data-date-inline-picker="true"  value={this.state.DATEOFBIRTH}  onChange={this.handledateofbirth}/></div>
            <div><label>Email</label>
            <input type='text'  value={this.state.Email}  onChange={this.handleemail}></input></div></div><br/>

            <div className='oo'>
            <div><label>password</label>
            <input type='password'></input></div>
            <div><label>confirm password</label>
            <input type='password'></input></div>
            </div><br/>

            <div className="box"></div>
            <div><input type='checkbox'></input>
            <label>Accept Terms & conditions</label></div>

            <div className='bn'>
            <div><button onClick={this.handlesubmit}>Register</button>
            {this.state.onSubmit&&<div>
            <label>TITLE  :  {this.state.Title}</label><br/>
            <label>FIRST NAME   :{this.state.Firstname}</label><br/>
            <label>LAST NAME   :{this.state.Lastname}</label><br/>
            <label>DATEOFBIRTH  :{this.state.Lastname}</label><br/>
            <label>EMAIL   :{this.state.Email}</label><br/>
            <label>PASSWORD  :{this.state.password}</label><br/>
            <label>CONFIRM PASSWORD  :{this.state.confirmpassword}</label><br/>
            </div>}
            </div>
             <div> <button onClick={() => this.handlesubmit1(() => "")}>Reset</button></div>
  </div>
               

          </div>
    )
  }
}

export default Regbelow