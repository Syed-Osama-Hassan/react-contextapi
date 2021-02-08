import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './ThemeContext';
import ThemeContext from './ThemeContext';
import Header from './Header';
import Main from './MainWithComponent';


function App() {
  const themeHook = React.useState("dark");

  return (
    <ThemeContext.Provider value = {themeHook}>
    <div>
      <Header />
      <Main />
    </div>
    </ThemeContext.Provider>
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
