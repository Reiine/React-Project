import './App.css';
import Nav from './components/Nav';
import UpperHome from './components/UpperHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import clothes from './homeclothes.json';
import HomeCard from './components/HomeCard';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from './components/Shop';


function App() {
  return (
    <Router>
      <Nav/>
      <div className="App">
        
        <Routes>
        
          <Route path="/" element={
            <><UpperHome/>
                <div className="main">
                  <h3><span style={{"borderBottom": "3px solid black" }}>Pre</span>mium</h3>
                  <div className='container'>
                    <div className="row row-cols-5 g-5">
                      {clothes.map((element, index) => {
                        return(
                          <HomeCard
                          name={element.name}
                          price ={element.price}
                          brand={element.brand}
                          img = {element.img}
                          />
                        )
                        })}
                    </div>
                  </div>
                      
                </div>  
          
          
          </>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </div>
      
      <Footer className="footer"/>
    </Router>
  );
}

export default App;
