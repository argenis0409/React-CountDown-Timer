import React, { Component } from 'react'

export default class TimerInput extends Component {

    onSubmit(event) {
        event.preventDefault();
        const strSeconds = this.refs.seconds.value;
        if(strSeconds.match(/[0-9]/)) {
          this.refs.seconds.value = '';
          this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
      }
      
      render() {
        return (
          <form ref="form" onSubmit={this.onSubmit.bind(this)}>
            <input type="number" ref="seconds" placeholder="enter time here"/>
            <input type="submit" value="Start"></input>
          </form>
        )
      }
}
