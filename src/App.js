import './App.css';
import '../src/component/navbar/navbar.css';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Intro from './component/intro/Intro';
import Office from './component/office/Office';
import Section from './component/section/Section';


function App() {
  return (
    <div className="App">
    <Navbar className="nav" />
      <Home />
      <Intro/>
      <Section/>
      <Office/>
      <Footer/>


    </div>
  );
}

export default App;
