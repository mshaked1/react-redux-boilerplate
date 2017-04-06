import React from 'react';
import Container from './components/Container';

const App = (props) =>  {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Container />
    </div>
  );
}

export default App;