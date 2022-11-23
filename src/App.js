import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ShowCard from './components/ShowCard';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import Showusers from './components/Showusers';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App">
      
    <Router>
        <Routes>
          <Route path='/showCard' element={ <ShowCard /> }/>
          <Route path='/showusers' element={ <Showusers /> }/>
          <Route path='/createCard' element={ <CreateCard /> }/>
          <Route path='/createUser' element={ <CreateUser /> }/>
          <Route path='/card/edit/:id' element={ <EditCard /> }/>
          <Route path='/user/edit/:user' element={ <EditUser /> }/>
        </Routes>
    </Router>

    </div>
);
}

export default App;

