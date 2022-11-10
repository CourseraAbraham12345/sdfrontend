import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Pruebas from './components/Pruebas';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Routes> 
      
        <Route path="/" exact element={<NotesList/>} />
        <Route path="/edit/:id" element={<CreateNote/>} />
        <Route path="/create" element={<CreateNote/>} />
        <Route path="/user" element={<CreateUser/>} />
        <Route path="/dev" element={<Pruebas/>} />
      
      </Routes>
      </div>
    </Router>
  );
}

export default App;
