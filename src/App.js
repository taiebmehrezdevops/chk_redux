import logo from './logo.svg';
import './App.css';
import ListTask from './Component/ListTask'
import AddTask from './Component/AddTask'
import { Component } from 'react';
import EditTask from './Component/EditTask';

function App() {
  return (
    <div className="App">
   <AddTask />
   <ListTask />
   
    </div>
  );
}

export default App;
