import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskListing from './components/TaskListing';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';

function App() {
  return (
    <div className="App">
      <h1>Trellon't</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskListing />}></Route>
          <Route path='/task/create' element={<TaskCreate />}></Route>
          <Route path='/task/edit/:taskid' element={<TaskEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
