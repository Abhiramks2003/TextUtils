import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar/NavBar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1700);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = "TextUtils-Home(Dark mode)"
      showAlert("Dark mode is enabled", 'success');
      setTimeout(() => {
        document.title = "TextUtils is Amazing"
      }, 2000);
      setTimeout(() => {
        document.title = "Install TextUtils Now!!!"
      }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "TextUtils-Home"
      showAlert("Light mode is enabled", "success");
    }
  }

  return (
    <div>
      <Router>
        <NavBar title="TextUtils" display={mode} toggleMode={toggleMode} about="About TextUtils" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About display={mode} toggleMode={toggleMode}/>}>
            </Route>
            <Route path="/"
             element={<TextForm heading="Write your text here" showAlert={showAlert} display={mode} toggleMode={toggleMode} />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;