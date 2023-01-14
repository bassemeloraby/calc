import { Fragment} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calc from './pages/Calc';
import CalcHelp from './pages/CalcHelp';
import Home from './pages/Home';

function App() {
  
  return (
    <Fragment>
    <div className='container'>
      <Navbar />
      <Home/>
      <Routes>
        <Route path="/calcHelp" element={<CalcHelp />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
      </div>
    </Fragment>
  );
}

export default App;
