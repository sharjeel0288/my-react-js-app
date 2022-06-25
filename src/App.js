import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [colorstyle, setColorStyle] = useState("#343a40")
  const [navcolor, setNavColor] = useState('#212529')
  const ChangeDarkModeColor = (cl) => {
    setColorStyle( cl )
  }
  const ChangeNavColor=(navclr)=>{
    setNavColor(navclr);
  }
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = colorstyle;
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <NavBar title="Text utils" mode={mode} toggleMode={toggleMode} ChangeDarkModeColor={ChangeDarkModeColor} ChangeNavColor={ChangeNavColor} navcolor={navcolor}/>
        <Alert alert={alert} />
        <div className='container my-3' >
          <Switch>
            <Route exact path="/about" >
              <About colorstyle={colorstyle} mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the Text to analyze below" mode={mode} showAlert={showAlert} colorstyle={colorstyle} navcolor={navcolor}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
