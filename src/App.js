import React, { Component } from 'react'
import Tone from 'tone'
import Nexus from 'nexusui'
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

    const piano = new Nexus.Piano('#piano',{
      'size': [500,125],
      'mode': 'button',  // 'button', 'toggle', or 'impulse'
      'lowNote': 24,
      'highNote': 60
  })

    return (
      <div className='App'>
        <h1>Testing</h1>
        <button onClick={playSynth}>Play Synth</button>
        <canvas data-nx="piano"></canvas>
      </div>
    )
  }
}

export default App
