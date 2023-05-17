
import './App.css';
import Navbar from "./Components/Navbar"
import AllRoutes from "./Components/AllRoutes";
import Footer from './Components/Footer';
import SignUp from "./Components/SignUp"
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
      
    </div>
  );
}

export default App;
