import { render } from 'react-dom';
import React, { Component } from 'react';
import { createFetchAction, handleFetchAction } from 'redux-fetch-action';

class App extends Component {
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
