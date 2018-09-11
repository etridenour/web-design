import React, { Component } from 'react';


class Name extends Component {
    formatName(user){
        return user.firstName + ' ' + user.lastName;
    }
  render() {

    let user = {firstName: 'Eric', lastName:'Ridenour'}
    
    return (
      <div>
          <h1>Hello {this.formatName(user)}</h1>
      </div>
    );
  }
}

export default Name;