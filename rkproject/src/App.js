import React, { Component } from 'react'
import Rkproject from'./Rkproject';
import Student from'./Student';
import Contact from './Contact';
import Newacc from './Newacc';
import Welcome from './Welcome';
import Voting from './Voting';
import Hw from './Hw';
import Regbelow from './Regbelow';
import Emp from './Emp';
import Props from './Props';
import Passenger from './Passenger';
export class App extends Component {
  state={
    title:"silambarasan"
  }
  render() {
    return (
      <div>
        <Props movie={this.state.title}/>
        <Emp name="Raghul" salary={100000}/>
        <Rkproject/>
      <Student/>
      <Contact/>
      <Newacc/>
      <Welcome/>
      <Voting/>
      <Hw/>
      <Regbelow/>
      <Passenger/>
      </div>
    )
  }
}

export default App;