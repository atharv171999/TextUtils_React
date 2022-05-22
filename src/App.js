import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Darkmode has been enabled", "success")
      document.title = "TextUtils- Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light has been enabled", "success")
      document.title = "TextUtils- Light Mode"
    }
  }
  

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/ab"> */}
            {/* <About/> */}
          {/* </Route>
          <Route exact path="/"> */}
             <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
