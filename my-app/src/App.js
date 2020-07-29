import React from 'react';
import { Button, Icon, Card, Grid } from 'semantic-ui-react';
import Timer from "./Components/Timer";
import NewTimer from "./Components/Form";
import Update from "./Components/Update";
import { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timers: [],
      visible: false,
      newName: '',
      newProject: '',
    }
    this.intervals = [];
  }
  handleStart = (id) => {
    const index = this.state.timers.findIndex(timer =>
      timer.id === id)
    let _this = this;
    if (!this.intervals[index]) {
      this.intervals[index] = setInterval(function () {
        _this.setState({
          timers: _this.state.timers.map((timer, i) => {
            if (index === i) {
              timer.elapsedSeconds += 1;
            }
            return timer;
          })
        });
      }, 1000);
    }
  }
  handleStop = (id) => {
    let timers = this.state.timers
    const index = timers.findIndex(timer =>
      timer.id === id)
    clearInterval(this.intervals[index]);
    this.intervals[index] = null;
  }
  handleDelete = (id) => {
    const index = this.state.timers.findIndex(timer =>
      timer.id === id)
    this.setState({ timers: this.state.timers.filter((timer, i) => index !== i) })
  }
  handleNewNameField(event) {
    event.preventDefault();
    this.setState({ newName: event.target.value });
  }
  handleNewProjectField(event) {
    event.preventDefault();
    this.setState({ newProject: event.target.value });
  }
  handleUpdate(id) {
    const index = this.state.timers.findIndex(timer =>
      timer.id === id)
    this.setState({
      timers: this.state.timers.map((timer, i) => {
        if (index === i) {
          timer.title = this.state.newName;
          timer.project = this.state.newProject;
          timer.updating = !timer.updating;
        }
        return timer;
      })
    })
  }
  addTimer(event) {
    event.preventDefault()
    const Title = event.target['Title'].value
    const Project = event.target['Project'].value
    const ids = this.state.timers.map(task => task.id);
    const max = Math.max(Math.max.apply(Math, ids), 0);
    const newTimer = {
      id: max + 1,
      title: Title,
      project: Project,
      elapsedSeconds: 0,
      updating: false,
    }
    this.setState({
      timers: [...this.state.timers, newTimer],
      visible: false,
    });
    event.target.reset()
  }
  toggleUpdate(id) {
    const index = this.state.timers.findIndex(timer =>
      timer.id === id);
    this.setState({
      timers: this.state.timers.map((timer, i) => {
        if (index === i) {
          timer.updating = !timer.updating;
        }
        return timer;
      })
    });
  }
  toggleForm() {
    this.setState({ visible: (!this.state.visible) });
  }
  render() {
    const { state, handleStart, handleUpdate, handleStop, toggleUpdate,
      handleDelete, toggleForm, addTimer, handleNewProjectField, handleNewNameField } = this;
    const { timers } = state;
    return (
      <div className="App">
        <br></br>
        <h1 class="ui dividing centered header">Stopwatches</h1>
        <Grid centered >
          <Grid.Column mobile={11} tablet={6} computer={4}>
            <Card.Group itemsPerRow={1}>
              {timers.map(item =>
                item.updating ? <Update
                  key={item.id}
                  title={item.title}
                  project={item.project}
                  handleNewNameField={handleNewNameField.bind(this)}
                  handleNewProjectField={handleNewProjectField.bind(this)}
                  handleUpdate={handleUpdate.bind(this, item.id)}
                  toggleUpdate={toggleUpdate.bind(this, item.id)} /> :
                  <Timer
                    key={item.id}
                    elapsedSeconds={item.elapsedSeconds}
                    title={item.title}
                    project={item.project}
                    updating={item.updating}
                    handleStart={handleStart.bind(this, item.id)}
                    handleStop={handleStop.bind(this, item.id)}
                    handleDelete={handleDelete.bind(this, item.id)}
                    toggleUpdate={toggleUpdate.bind(this, item.id)}
                  />
              )}
              <br></br>
              {this.state.visible ? <NewTimer addTimer={addTimer.bind(this)} toggleForm={toggleForm.bind(this)} /> : null}
            </Card.Group>
            <br></br>
          </Grid.Column>
        </Grid>
        <Button onClick={toggleForm.bind(this)}><Icon fitted name='plus' /></Button>
      </div>
    );
  }
}
export default App;
