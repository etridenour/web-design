import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from './requireAuth';

class Feature extends Component {

  // //happens before anything is rendered
  // componentWillMount(){
  //   this.shouldNavigateAway();
  // }

  // //happens after new updates to props
  // componentDidUpdate(){
  //   this.shouldNavigateAway();
  // }
  
  // shouldNavigateAway() {
  //   if (!this.props.auth) {
  //     this.props.history.push('/');
  //   }
  // }

  render() {
    return <div>This is the feature!</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}


export default requireAuth(Feature);
