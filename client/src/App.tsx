import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router} from "react-router-dom"
import MapRoute from "./components/RouterConfig/MapRoute"
import {connect} from 'socket.io-client'
import routes from './routes/Route'

function App() {

  useEffect(()=>{
      connect('http://localhost:8000')
  },[])

  return (
      <Router>
        <div className="App">
          <MapRoute routes={routes}/> 
        </div>
      </Router>
  );
}

export default App;

