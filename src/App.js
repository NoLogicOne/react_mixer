import React from 'react';
import './App.css';

import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <h1>MIXER</h1>
    </div>
  );
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
