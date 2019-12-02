import React from 'react';
import axios from 'axios';
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

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventInput: '',
    };
  }
  handleSubmit = async (ev, dateDisplay, fullDay) => {
    //console.log('fullday', fullDay);
    //console.log('target', this.state.eventInput);
    await axios
      .post(`/api/events/`, {
        name: this.state.eventInput,
        done: false,
        date: fullDay,
      })
      .then(
        (
          res //console.log('in days', res.data.name, res.data.done),
        ) => this.setState({ events: [...this.state.events, res.data.name] })
        //console.log('checking state after setting', this.state.events)
      );
    this.setState({ eventInput: ' ' });
  };

  handleDone = async ev => {
    //console.log('ev in handleDone', ev);

    await axios
      .delete(`/api/events/`, {
        name: this.state.eventInput,
        done: false,
        date: fullDay,
      })
      .then(
        (
          res //console.log('in days', res.data.name, res.data.done),
        ) => this.setState({ events: [...this.state.events, res.data.name] }),
        console.log('checking state after setting', this.state.events)
      );
    this.setState({ events: ' ' });
  };
  componentDidMount = async fullDay => {
    let year = format(new Date(), 'yyyy');
    let month = format(new Date(), 'MM');
    console.log('before axios call');
    let res = await axios.get(`/api/events/${year}/${month}`);
    console.log('!!!!!!!!res.data', res.data);
    this.setState({ events: [...this.state.events, res.data.name] });
  };
  render() {
    const { dateDisplay, fullDay } = this.props;
    const { events } = this.state;
    //console.log('events', events.length);
    return (
      <div className="number" key={dateDisplay}>
        <span>{dateDisplay}</span>
        <div>
          {events.length
            ? events.map((event, idx) => {
                return (
                  <div>
                    <span key={idx}>{event}</span>
                    <button onClick={ev => this.handleDone(ev)}>done</button>
                  </div>
                );
              })
            : ''}
        </div>
        <input
          text="text"
          value={this.state.eventInput}
          onChange={ev => {
            this.setState({ eventInput: ev.target.value });
          }}
        />
        <button onClick={ev => this.handleSubmit(ev, dateDisplay, fullDay)}>
          add Event
        </button>
      </div>
    );
  }
}
