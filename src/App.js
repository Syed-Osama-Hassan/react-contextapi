import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [theme, setTheme] = React.useState("blue");
  return (
    <div>
      <Text theme="blue" />
      <h1>{theme}</h1>
    </div>
  );
}

function Text({theme}){
  return(
    <h1 style={{color:`${theme}`}}>{theme}</h1>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

export default App;
