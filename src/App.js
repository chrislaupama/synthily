import React, { Component } from 'react'
import Tone from 'tone'

import Button from '@material-ui/core/Button'

import './App.css'

class App extends Component {
  state = {
    keys: ['C4', 'D4', 'E4', 'F4', 7'G4', 'A4', 'B4']
  }

  render() {
    //create a synth and connect it to the master output (your speakers)
    const synth = new Tone.Synth().toMaster()

    //trigger the synth with an on-click
    const playSynth = e => {
      //play a middle 'C' for the duration of an 8th note
      synth.triggerAttackRelease(e.target.name, '8n')
    }

    return (
      <div className='App'>
        <h1>Press a key</h1>
        {this.state.keys.map(keys => {
          return (
            <Button
              variant='contained'
              onClick={playSynth}
              name={keys}>
              {keys}
            </Button>
          )
        })}
      </div>
    )
  }
}

export default App
