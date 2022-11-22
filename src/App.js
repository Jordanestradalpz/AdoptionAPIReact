import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ShowSpecies from './components/ShowSpecies';
import CreateSpecie from './components/CreateSpecie';
import EditSpecie from './components/EditSpecie';

function App() {
  return (
    <div className="App">
      
    <Router>
        <Routes>
          <Route path='/' element={ <ShowSpecies /> }/>
          <Route path='/createSpecie' element={ <CreateSpecie /> }/>
          <Route path='/edit/:id' element={ <EditSpecie /> }/>
        </Routes>
    </Router>

    </div>
);
}

export default App;
