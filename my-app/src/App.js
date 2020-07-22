import React from 'react';
import { Button, Icon, } from 'semantic-ui-react';

import './App.css';

function App() {
  return (
    <div className="App">
      <br></br>
      <h1 class="ui dividing centered header">Timers</h1>
      <div class="ui basic content center aligned segment">
        <Button>
          <Icon fitted name='plus' />
        </Button>
      </div>
    </div >
  );
}

export default App;
