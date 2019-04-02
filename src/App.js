import React, { Component } from 'react'
import Tone from 'tone'
import './App.css'

class App extends Component {
  render() {
    //create a synth and connect it to the master output (your speakers)
    const synth = new Tone.Synth().toMaster()

    //trigger the synth with an on-click
    const playSynth = () => {
      //play a middle 'C' for the duration of an 8th note
      synth.triggerAttackRelease('C4', '8n')
    }

    return (
      <div className='App'>
        <h1>Testing</h1>
        <button onClick={playSynth}>Play Synth</button>
        <canvas id='dial' data-nx='dial'></canvas>
      </div>
    )
  }
}

export default App
