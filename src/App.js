import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import './App.css';



function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
          </Switch>

        </div>

      </Router>
    </GlobalProvider>
  );
}

export default App;
