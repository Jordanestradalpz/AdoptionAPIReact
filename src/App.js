import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowSpecies from './components/ShowSpecies';
import CreateSpecie from './components/CreateSpecie';
import EditSpecie from './components/EditSpecie';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowSpecies /> }/>
            {/* <Route path='/create' element={ <CreateSpecie /> }/> */}
            {/* <Route path='/edit/:id' element={ <EditSpecie /> }/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
