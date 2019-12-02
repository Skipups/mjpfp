import React from 'react';
//import moment from 'moment';
import axios from 'axios';
import Day from './day.js';
import {
  format,
  addMonths,
  subMonths,
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
} from 'date-fns';
//const { format } = require('date-fns');
//console.log('dateFns', dateFns);
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      newEvent: ' ',
      allEvents: [],
    };
  }

  // componentDidMount(){
  //   axios.get(`/api/events`, (req, res, next))
  //   .then(res => {
  //     this.setState({allEvents: res.data})
  //   }).next(err =>{

  //   })
  // }

  makeHeader() {
    const dateFormat = 'MMMM yyyy';
    console.log('in makeHeader', this.state.currentMonth);
    return (
      <div className="header">
        <div className="col-left">
          <div className="nav" onClick={this.subMonth}>
            {'<<<<'}
          </div>
        </div>
        <div className="col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col-right" onClick={this.nextMonth}>
          <div className="nav">{'>>>>'}</div>
        </div>
      </div>
    );
  }
  nextMonth = () => {
    const dateFormat = 'mmmm';
    console.log(this.state.currentMonth, 1);
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };
  subMonth = () => {
    console.log(this.state.currentMonth);
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };
  makeWeek = () => {
    const week = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return (
      <div className="week-header">
        {week.map((wk, idx) => {
          return <div key={idx}>{wk}</div>;
        })}
      </div>
    );
  };

  makeDay() {
    const dateFormat = 'dd';
    const rows = [];
    let days = [];
    console.log('in makeDay', this.state.currentMonth);
    const { currentMonth } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    let day = startDate;

    //isSameMonth(dateLeft, dateRight)
    let formattedDate = '';
    while (day <= monthEnd) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, dateFormat);
        // console.log(format(day, 'MM'));
        const fullDay = format(day, 'yyyy-MM-dd');
        //console.log(fullDay);
        // console.log(
        //   'day',
        //   day,
        //   'monthEnd',
        //   format(monthEnd, 'dd'),
        //   'fullday',
        //   fullDay
        // );
        days.push(
          // <div className="number" key={day}>
          //   <span>{isSameMonth(day, monthStart) ? format(day, 'dd') : ''}</span>
          //   <input
          //     text="text"
          //     value={this.state.newEvent}
          //     onChange={ev => {
          //       this.setState({ newEvent: ev.target.value });
          //     }}
          //   />
          //   <button onClick={ev => this.handleSubmit(ev, fullDay)}>
          //     add Event
          //   </button>
          // </div>
          <Day
            dateDisplay={isSameMonth(day, monthStart) ? format(day, 'dd') : ''}
            fullDay={fullDay}
          />
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day + Math.random()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  render() {
    return (
      <div>
        <div className="calendar-container">{this.makeHeader()}</div>

        <div className="container">{this.makeWeek()}</div>
        <div className="container">{this.makeDay()}</div>
      </div>
    );
  }
}
