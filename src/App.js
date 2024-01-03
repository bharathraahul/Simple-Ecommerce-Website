import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch,Routes} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>

          {/* <Route path ='/login'
            element={
              <Login/>
            }>
          </Route> */}
        
          <Route path='/checkout' 
          element={
            [<Header/>,<Checkout/>]
          }> 
          </Route>

          <Route path='/'
          element={[
            <Header/>,
            <Home/>]}>
          </Route>
  
        </Routes>

      </Router>


      
    </div>
  );
}

export default App;
