import React from 'react';
import './App.css';
import Header from './components/Header';
import LiveWagers from './components/LiveWagers';

const App = () => {
  return (
    <div className="app">
      <Header />
      <LiveWagers />
    </div>
  );
};

export default App;
