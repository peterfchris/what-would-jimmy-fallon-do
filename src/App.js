import React from 'react';
import './App.css';
import NewQuestion from './Components/Stateful Components/NewQuestion'
import QuestionsDisplay from './Components/Stateful Components/QuestionsDisplay'


function App() {
  return (
    <div>
      <NewQuestion />
      <QuestionsDisplay />      
    </div>
  );
}

export default App;
