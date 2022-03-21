import React, { Component } from 'react'
import './Welcome.css'

export class Welcome extends Component {
  render() {
    return (
      <div className='wel'>
        <div className='st'>
          <h1><center>WELCOME !</center></h1></div>
       <div className='oo'>
         <h3><screenLeft>ALREADY REGISTERED ?</screenLeft></h3>
         <h3>NEW CUSTOMER ?</h3></div>
       <div className='ss'>
       <input type='text' placeholder='Email Address'></input>
       <input type='text' placeholder='Email Address'></input>
       </div>
       <div className='jj'>
       <input type='text' placeholder='password'></input>
       <input type='text' placeholder='password'></input>
       </div>
       <div className='jkl'>
       <div><button>SIGN IN</button></div>
       <div><button>CREATE ACCOUNT</button></div>
       </div>






      </div>
    )
  }
}

export default Welcome