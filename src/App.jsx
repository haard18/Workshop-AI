import ProblemList from './components/Problemlist';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Story from './components/Story';
import SubmissionInfo from './components/Submission';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<ProblemList />} />
        <Route path='/story' element={<Story />} />
        <Route path="/submission" element={<SubmissionInfo/>}/>


        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
