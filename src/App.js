import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ShowCards} from './components/ShowCards';
import {CreateCard} from './components/CreateCard';
import {EditCard} from './components/EditCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<ShowCards/>}/>
        <Route path='/create' element={<CreateCard/>} />
        <Route path='/edit/:id' element={<EditCard/>} />
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}
export default App;







