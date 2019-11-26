import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import dateFns from 'date-fns';
import Moment from 'react-moment';
import 'moment-timezone';

const rootEl = document.querySelector('#root');

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
      </div>
    );
  }
}

ReactDOM.render(<Calendar />, rootEl);
