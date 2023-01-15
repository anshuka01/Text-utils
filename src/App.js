
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); //
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
       setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-LightMode';

    }
  }
  return (
<>
{/* <Router> */}
<Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
{/* <Routes>
  <Route exact path="/about" element={<About/>} /> */}
 <TextForm showAlert ={showAlert} heading="Enter the text here to analyze" mode={mode} />
</div>
</>
  );
}

export default App;
