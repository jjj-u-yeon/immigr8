import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import Review from './Review';
import { Paper } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/immigr8' element = {<Form/>}/>
          <Route path='/immigr8/review' element = {<Review/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
