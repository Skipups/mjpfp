import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './other.js';
import axios from 'axios';

const rootEl = document.querySelector('#root');
function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

ReactDOM.render(<App />, rootEl);
