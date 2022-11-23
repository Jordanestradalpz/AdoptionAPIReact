import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ShowSpecies from './components/ShowSpecies';
import CreateSpecie from './components/CreateSpecie';
import EditSpecie from './components/EditSpecie';
import ShowVaccines from './components/ShowVaccines';
import EditVaccine from './components/EditVaccine';
import CreateVaccine from './components/CreateVaccine';

function App() {
  return (
    <div className="App">
      
    <Router>
        <Routes>
          <Route path='/showSpecies' element={ <ShowSpecies /> }/>
          <Route path='/showVaccines' element={ <ShowVaccines /> }/>
          <Route path='/createSpecie' element={ <CreateSpecie /> }/>
          <Route path='/createVaccine' element={ <CreateVaccine /> }/>
          <Route path='/specie/edit/:id' element={ <EditSpecie /> }/>
          <Route path='/vaccine/edit/:idVaccine' element={ <EditVaccine /> }/>
        </Routes>
    </Router>

    </div>
);
}

export default App;
