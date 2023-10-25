import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import AddStudent from './Student/AddStudent';
import ViewStudent from './Student/ViewStudent';
import EditStudent from './Student/EditStudent';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/addstudent' element={<AddStudent></AddStudent>}></Route>
        <Route exact path='/editstudent/:id' element={<EditStudent></EditStudent>}></Route>
        <Route exact path='/viewstudent/:id' element={<ViewStudent></ViewStudent>}></Route>
      </Routes>

  

      </Router>
      
    </div>
  );
}

export default App;
