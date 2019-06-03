import React, {Component} from 'react';
import './App.css';

import Groups from "./Groups/Groups.js"

import {connect} from 'react-redux'

class App extends Component{
  render() {
    const {groups} = this.props.data
    return (
      <div className="App">
        <h1>MIXER</h1>
        <Groups groups={groups}/>
        <textarea cols="30" rows="10"></textarea>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state
})

const mergeProps = (stateProps, dispatchProps) => {
  let {data} = stateProps
  let {dispatch} = dispatchProps

  return {
    data
    
  }
}

export default connect(
  mapStateToProps, 
  null,
  mergeProps)(App);
