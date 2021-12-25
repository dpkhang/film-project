import React from 'react';
import './App.scss';
import { BrowserRouter as Router} from "react-router-dom"
import MapRoute from "./components/RouterConfig/MapRoute"
import routes from './routes/Route'

function App() {
  
  return (
      <Router>
        <div className="App">
          <MapRoute routes={routes}/> 
        </div>
      </Router>
  );
}

export default App;

