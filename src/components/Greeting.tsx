import * as Moment from 'moment';
import * as React from 'react';

export interface IGreetingState {
  day: string;
  date: string;
  time: string;
}

export class Greeting extends React.Component<{}, IGreetingState> {
  public state = {
    date: "",
    day: "",
    time: ""
  }

  public componentWillMount(){
    this.getGreetings()
  }
  public render() {
    return (
      <React.Fragment>
        {this.state.time} Its {this.state.day} {this.state.date}
      </React.Fragment>
    );
  }

  public getGreetings() {
    let {day,date,time} = this.state
    const now = Moment()

    day = now.format('dddd').toString();
    date= now.format('MMMM DD, YYYY').toString() 
    const t = now.hour()
    time = t < 3 ? "Sleep now." : t < 12 ? "Good morning": t < 17 ? "Good afternoon!": t < 21 ? "Good evening!" : 'Good night!'

    this.setState({day, date, time})

    // tslint:disable-next-line:no-console
    // console.log(this.state);
    
  }
}

export default Greeting;