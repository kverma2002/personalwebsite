import dayjs from 'dayjs';
import React, { Component } from 'react';


class TimeComponent extends Component {
  constructor(props){
    super(props);
    this.state = {age: dayjs().diff(dayjs('2002-12-10'), 'year', true).toString().substring(0,12)};
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ age : dayjs().diff(dayjs('2002-12-10'), 'year', true).toString().substring(0,12)}), 50);
    console.log("TimeComponent Mounted...")
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
      <p>I am a { this.state.age } year-old student/devloper</p>
    );
  }
  
}

export default TimeComponent;