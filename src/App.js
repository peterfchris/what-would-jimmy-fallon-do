import React from 'react';
import './App.css';
import AddQuestion from './Components/AddQuestion'
import AllQuestions from './Components/AllQuestions'
import DeleteQuestion from './Components/DeleteQuestion'


function App() {
  return (
    <div className="App">
      <AddQuestion />
      <AllQuestions />
      <DeleteQuestion />
    </div>
  );
}

export default App;
