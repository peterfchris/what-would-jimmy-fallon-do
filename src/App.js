import React from 'react';
import './App.css';
import NewQuestion from './Components/Stateful Components/NewQuestion'
import QuestionsDisplay from './Components/Stateful Components/QuestionsDisplay'
import Header from './Components/Stateless Components/Header'
import Footer from './Components/Stateless Components/Footer';



function App() {
  return (
    <div>
      <Header />
      <NewQuestion />
      <QuestionsDisplay /> 
      <Footer />     
    </div>
  );
}

export default App;
