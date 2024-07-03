import './App.css';
import Header from './components/Header';
import LiveWagers from './components/LiveWagers';
import OngoingWagers from './components/OngoingWagers';
import OpenWagers from './components/OpenWagers';

const App = () => {
  return (
    <div className="app">
      <Header />
      <LiveWagers />
      <OpenWagers />
      <OngoingWagers />
    </div>
  );
};

export default App;
