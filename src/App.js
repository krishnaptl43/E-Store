import './App.css';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import MainSlider from './components/sections/MainSlider';
import HomePage from './pages/HomePage';

function App() {
  return (
   <>
   <TopBar/>
   <NavBar/>
   <BottomBar/>
   <HomePage/>
   <Footer/>
   </>
  );
}

export default App;
