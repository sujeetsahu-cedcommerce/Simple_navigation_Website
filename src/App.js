// import logo from './logo.svg';
import './App.css';
import { Route, Routes,} from 'react-router-dom';
import "./Style.css"
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="contact_us" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
