import ProblemList from './components/Problemlist';
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Story from './components/Story';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProblemList />} />
        <Route path='/story' element={<Story/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
