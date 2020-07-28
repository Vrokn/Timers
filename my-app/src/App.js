import React from 'react';
import { Button, Icon, Card, } from 'semantic-ui-react';
import Timer from "./Components/Timer";
import Form from "./Components/Form";

import { Component } from "react";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timers: [],
      visible: false,
    }
  }

  handleStart = (id) => {
    let timers = this.state.timers
    const index = timers.findIndex(timer =>
      timer.id === id)
    const selectedTimer = timers[index].elapsedSeconds
    let _this = this
    setInterval(function () {
      _this.setState({ selectedTimer: selectedTimer + 1 })
      console.log(timers)
    }, 1000)
  }

  handleStop = (id) => {
    clearInterval(this.interval)
  }

  handleEdit = (id) => {
    this.setState({

    })
  }
  handleDelete = (id) => {
    const index = this.state.timers.findIndex(timer =>
      timer.id === id)
    let newList = this.state.timers.splice(index, 1);
    this.setState({ timers: newList })
  }

  addTimer(event) {
    event.preventDefault()
    const Title = event.target['Title'].value
    const Project = event.target['Project'].value
    const newTimer = {
      id: Math.max(this.state.timers.map(task => task.id)) + 1,
      title: Title,
      project: Project,
      elapsedSeconds: 0,
      counting: false,
    }
    this.setState({
      timers: [newTimer, ...this.state.timers],
      visible: false,
    });
    event.target.reset()
  }

  toggleForm() {
    this.setState({ visible: (!this.state.visible) });
  }
  render() {
    const { state, handleStart, handleStop, handleEdit, handleDelete, toggleForm, addTimer } = this;
    const { timers } = state;

    return (
      <div className="App">

        <br></br>
        <h1 class="ui dividing centered header">Stopwatches</h1>
        <div class="ui basic content center aligned segment">

          <Card.Group stackable centered>
            {timers.map(item =>
              <Timer
                key={item.id}
                elapsedSeconds={item.elapsedSeconds}
                title={item.title}
                project={item.project}
                handleStart={handleStart.bind(this, item.id)}
                handleStop={handleStop.bind(this, item.id)}
                handleEdit={handleEdit.bind(this, item.id)}
                handleDelete={handleDelete.bind(this, item.id)}
              />
            )}
            <br></br>
            {this.state.visible ? <Form addTimer={addTimer.bind(this)} toggleForm={toggleForm.bind(this)} /> : null}
          </Card.Group>
          <br></br>

          <Button onClick={toggleForm.bind(this)}><Icon fitted name='plus' /></Button>
        </div>
      </div >
    );
  }

}

export default App;
