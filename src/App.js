import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <hr/>
      <About/>
      <hr/>
      <Services/>

      <Footer/>
    </div>
  );
}

export default App;
