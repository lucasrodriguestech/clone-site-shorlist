
import './App.css';
import Artigos from './components/Artigos';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Artigos />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
