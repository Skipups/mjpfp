import React from 'react';
//import moment from 'moment';
import dateFns from 'date-fns';
import { format, compareAsc } from 'date-fns';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.makeHeader = this.makeHeader.bind(this);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
    };
  }
  makeHeader() {
    const dateFormat = 'MMMM yyyy';
    console.log(this.state.currentMonth);

    return (
      <div className="header">
        <div className="col-start">
          <div className="nav" onClick={this.subMonth}>
            {'<<<<'}
          </div>
        </div>
        <div className="col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col-left" onClick={this.nextMonth}>
          <div className="nav">{'>>>>'}</div>
        </div>
      </div>
    );
  }
  nextMonth = () => {
    console.log('!!!!', this); //not working
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
    });
  };
  subMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
    });
  };
  makeDays = () => {
    const dateFormat = 'dddd';
    const daysArray = [];

    let start = dateFns.startOfWeek(this.state.currentMonth);
    console.log(start);
  };

  render() {
    return (
      <div>
        <div className="calendar-container">{this.makeHeader()}</div>
        <div className="days-container">{this.makeDays()}</div>;
      </div>
    );
  }
}

/*
import React from 'react';
import moment from 'moment';

let weekDays = moment.weekdaysShort();
// [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// let headerWeekDays = weekDays.map((day, idx) => {
//   return (
//     <th key={idx} className="week-days">
//       {day}
//     </th>
//   );
// });

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.makeMonth = this.makeMonth.bind(this);
    this.state = {
      date: moment(new Date()),
    };
  }
  makeMonth() {
    let numOfDays = moment(this.props.date).daysInMonth();

    //empty 5wkx7day month container array
    let monthArray = [];
    for (let row = 0; row < 5; row++) {
      let newRow = [];
      for (let col = 1; col <= 7; col++) {
        newRow.push([null]);
      }
      monthArray.push(newRow);
    }

    let week = 0;
    for (let i = 1; i <= numOfDays; i++) {
      const eachDayOfTheMonth = moment(this.props.date).date(i);
      //console.log('eachDayOfTheMonth', eachDayOfTheMonth);
      const dayOfTheMonth = eachDayOfTheMonth.day();
      //console.log('dayOfTheMonth', dayOfTheMonth);
      //console.log(monthArray[week][dayOfTheMonth]);

      if (i % 7 === 0) {
        week++;
      }
      monthArray[week][dayOfTheMonth] = eachDayOfTheMonth;
    }
    return monthArray;
  }

  render() {
    const month = this.makeMonth();
    console.log(month[1]);
    //const currentMonth = this.props.date.month();
    return (
      <div className="calendar-container">
        <h1>{moment(this.props.date).month()}</h1>
<table>
  <thead>
    <tr>
      {mo}
      <th>Sunday</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Sunday</th>
    </tr>
  </thead>
</table>
        <div className="week-days-header">
          {moment.weekdaysShort().map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
        <div className="days">
          {month.map((week, idx) =>
            week.map((day, idx) => {
              <div id="week-row" key={idx}>
                <div id="day" key={idx}>
                  {day.toDate}
                </div>
              </div>;
            })
          )}
        </div>
      </div>
    );
  }
}
*/
