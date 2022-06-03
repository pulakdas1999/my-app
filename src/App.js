import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import {BrowserRouter as Router, Switch, Route, Routes, Link} from "react-router-dom";
import About from './components/About';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    );
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Background changed", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Background changed", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route exact path="/" element={<TextForm alert={showAlert} header="Enter your text here to analyze" mode={mode} toggleMode={toggleMode}/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
