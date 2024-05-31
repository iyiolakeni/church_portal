import './App.css';
import '../src/styles/navbar.css'
import '../src/styles/page1.css'
import '../src/styles/cardpage.css'
import '../src/styles/sermon.css'
import Page1 from './components/page1';
import CardPage from './components/cardpage';
import Sermon from './components/sermon';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page1/>
      <CardPage/>
      <Sermon/>
    </div>
  );
}

export default App;
