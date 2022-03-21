 import React, { Component } from 'react'
 
 export class Passenger extends Component {
   render() {
     return (
         <div className='w-50 m-4 p-4 border border-dark border-3'>
       <div className='col-6'>
         <div> <label>NAME OF THE PASSENGER</label>
           <input type='text' className='form-control' onChange={this.handlename}></input></div>
       <div className='col-6'>
           <label>AGE</label>
       <input type='text'></input></div>
       <div >
          <div> <label>GENDER</label>
           <div><input type='radio' name='gender' ></input>
           <label>Male</label></div>
           <div><input type='radio' name='gender'></input>
            <label>Female</label></div>   
        <div className='col-5'>
            <label>Source  :</label>
            <select>
        <option>Source</option>
        <option>chennai</option>
        <option>Banglore</option>
        <option>Hyderabad</option>
        </select> </div>    
        <div className='col-5'>
            <label>Destination  :</label>
            <select>
                <option>Destination</option>
                <option>Delhi</option>
                <option>Kolkatta</option>
                <option>Simla</option>
            </select>
            <div className='ckb'>
                <input type='checkbox'></input>
                <label>I agree all terms</label>
                <button onClick={this.handlesub}>Submit</button>
                
            </div>
        </div>
           </div>
       </div>
       </div>
       </div>
     )
   }
 }
 
 export default Passenger