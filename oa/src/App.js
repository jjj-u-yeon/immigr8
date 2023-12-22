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
          <Route index element = {<Form/>}/>
          <Route path='/review' element = {<Review/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
