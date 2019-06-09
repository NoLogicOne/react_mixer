import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as AC from './model/actionCreators.js'

import './App.css';

import Groups from "./Groups/Groups.js"


class App extends Component{
  render() {
    const {groups, saves, mix} = this.props.data
    const { onMixChange } = this.props
    return (
      <div className="App">
        <h1 onClick={this.props.getMix}>MIXER</h1>
        <Groups groups={groups} saves={saves} {...this.props}/>
        <textarea 
          cols="30" 
          rows="10"
          value={mix}
          onChange={e => onMixChange(e.target.value)} />
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
    data,
    addWindow: () => {
      dispatch(AC.addWindow())
    },
    inputText: (text, idx) => {
      dispatch(AC.inputText(text, idx))
    },
    changeWindow: (idx) => {
      dispatch(AC.changeWindow(idx))
    },
    loadSample: (idx, name) => {
      dispatch(AC.loadSample(idx, name, data.saves))
    },
    saveSample: (idx, name) => {
      dispatch(AC.saveSample(idx, name, data.groups))
    },
    getMix: () => {
      dispatch(AC.getMix(data.groups))
    },
    onMixChange: (value) => {
      dispatch(AC.onMixChange(value))
    }
  }
}

export default connect(
  mapStateToProps, 
  null,
  mergeProps)(App);
