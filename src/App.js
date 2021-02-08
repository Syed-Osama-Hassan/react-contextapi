import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div>
      <Text theme="blue"/>
      <h1>{theme}</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

export default App;
