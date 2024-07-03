import './App.css';
import Header from './components/Header';
import LiveWagers from './components/LiveWagers';
import OpenWagers from './components/OpenWagers';

const App = () => {
  return (
    <div className="app">
      <Header />
      <LiveWagers />
      <OpenWagers />
    </div>
  );
};

export default App;
