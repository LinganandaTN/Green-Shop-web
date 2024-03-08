import Header from './Pages/Header/Header'
import Allroutes from './Allroutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function With_header() {

    return (
        <div className="App">
        <Router>
          <Header />
          <Allroutes />     
        </Router>
        </div>
      );
    }

  export default With_header;