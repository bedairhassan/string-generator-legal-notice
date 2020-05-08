import React, { useState } from 'react';

import DisplayString from './components/DisplayString'
import ObtainData from './components/ObtainData'

import './App.css';



function App() {



  var [obj, objSet] = useState({ name: ``, title: ``, gender: `` })

  return (
    <div style={{ padding: '50px' }}>

      <center>String (Legal Notice) Generator</center>

      <br />
      <ObtainData onClick={objGuest => objSet(objGuest)} />

      <DisplayString
        name={obj.name}
        gender={obj.gender}
        title={obj.title}
      />



    </div>
  );
}

export default App;
