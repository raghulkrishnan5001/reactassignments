import React, { Component } from 'react'

export class Emp extends Component {
  render() {
    return (
      <div>Emp name={this.props.name}<br/>
      Emap salary={this.props.salary}
      </div>
    )
  }
}

export default Emp