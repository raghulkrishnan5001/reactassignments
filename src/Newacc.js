import React, { Component } from 'react';
import './Newacc.css'
class Newacc extends Component {
  render() {
    return (
        <div className='xx'>
        <h1 className='ll'><center>Register New Account</center></h1>
          <div className ='zz'>
          <div><input type='text' placeholder='First Name'></input></div>
          <div><input type='text' placeholder='Last Name'></input></div>
          </div>
          <div className='vv'>
          <input type='text' placeholder='Name'></input>
          </div>
          <div className='nn'>
          <input type='text' placeholder='City'></input>
          </div>
          <div className='mm'>
          <input type='text' placeholder='Phone Number'></input></div>
          <div className='tt'>
          <input type="text" placeholder='Email'></input></div>
          <button className="button" onClick="submit">Create Account</button>
        </div>
    )
  }
}

export default Newacc;