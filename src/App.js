import React from 'react';
import Form from './components/form';
import './App.css';
import iconDots from './img/dots.svg';
import iconCalendar from './img/calendar.svg';
import iconWork from './img/work.svg';
import iconPencil from './img/pencil.svg';
import iconNotebook from './img/notebook.svg';
import iconMessage from './img/message.svg';

function App() {
  return (
    <div className="App">
      <img className='dots' src={iconDots} alt='dots' width='192' height='245'/>
      <img className='calendar' src={iconCalendar} alt='calendar' width='2160' height='2160'/>
      <img className='work' src={iconWork} alt='work' width='192' height='245'/>
      <img className='notebook' src={iconNotebook} alt='notebook' width='1391' height='1721'/>
      <img className='pencil' src={iconPencil} alt='pencil' width='1897' height='1017'/>
      <img className='message' src={iconMessage} alt='message' width='2160' height='2160'/>
      <Form />
    </div>
  );
}

export default App;