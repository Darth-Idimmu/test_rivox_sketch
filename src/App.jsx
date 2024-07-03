import './App.css';
import Header from './components/Header';// Nuevo componente
import LiveWagers from './components/LiveWagers';
import OpenWagers from './components/OpenWagers';
import OngoingWagers from './components/OngoingWagers';
import Footer from './components/Footer'; // Nuevo componente

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <LiveWagers />
        <OpenWagers />
        <OngoingWagers />
      </main>
      <Footer />
    </div>
  );
};

export default App;
