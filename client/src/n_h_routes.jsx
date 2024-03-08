import Header from './Pages/Header/Header'
import Allroutes from './Allroutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function No_header() {

    return (
        <div className="App">
        <Router>
          <Allroutes />     
        </Router>
        </div>
      );
    }

  export default No_header;