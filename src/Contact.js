import React, { Component } from 'react'
import './Contact.css'
export class Contact extends Component {
  render() {
    return (
      <div className='rr'>
          <h1>Contact Us</h1>
          <div className='aa'>
              <div><label>First Name</label><br/>
              <input type="text" ></input></div>
              <div><label>Last Name</label><br/>
              <input type="text"></input></div>
              </div>
              <div className='bb'>
              <div><label>E-mail</label><br/><input type="text"></input></div>
              <div><label>Business Phone</label><br/><input type="text"></input></div>
              </div>
              <div className='cc'><label>Street 1</label><br/><input type="text"></input>
              </div>
              <div className='dd'>
              <div><label>City</label><br/>
              <input type="text"></input></div>
              <div><label>StateProvince</label><br/>
              <input type="text"></input></div>
              </div>
              <div className="ee">
              <div><label>Zip/PostalCode</label><br/>
              <input type="text"></input></div>
              <div><label>Country/Region</label><br/>
              <input type="text"></input></div>
              </div>
              <div className="ff">
              <label>Topic</label><br/>
              <input type="text"></input>            
              </div>
              
              </div>
    )
  }
}

export default Contact