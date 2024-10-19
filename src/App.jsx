import { useState } from 'react'
import './App.css'
import './box.css'
import count from './count'
import Count from './count'
import Person from './person'

function App() {
  function firsthandler() {
    alert('First button clicked')
  }
  function addFive(num) {
    alert(num + 5)
  }
  return (
    <>
      <h3>Second Module Practice</h3>
      <Person></Person>
      <button onClick={firsthandler}>First Button</button>
      <button onClick={() => alert('second button click')}>Second Button</button>
      <button onClick={() => { addFive(3) }}>Third Button</button>
      <Count></Count>
    </>
  )
}


export default App
