import './App.css';
import Header from './Pages/Header/Header'
import Allroutes from './Allroutes';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <div className="App">
    <Router>
        <UserContextProvider>
          <Header />
          <Allroutes />
        </UserContextProvider>
    </Router>
    </div>
  );
}

export default App;
