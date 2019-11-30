import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './aclend.js';

const rootEl = document.querySelector('#root');
function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

ReactDOM.render(<App />, rootEl);
