import React from 'react';
import Form from './components/form';
import './App.css';
import iconDots from './img/dots.svg';
import iconWork from './img/work.png';
import iconMessage from './img/message.png';

function App() {
  return (
    <div className="App">
      <img className='dots' src={iconDots} alt='dots' width='192' height='245'/>
      <img className='work' src={iconWork} alt='work' width='614' height='614'/>
      <img className='message' src={iconMessage} alt='message' width='620' height='620'/>
      <Form />
    </div>
  );
}

export default App;