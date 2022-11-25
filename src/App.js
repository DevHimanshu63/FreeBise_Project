import React from 'react';
import Coustomer from './Components/Coustomer';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Network from './Components/Network';
import Plan from './Components/Plan';
function App() {
  return (
    <div className="App">
     <Header/>
     <Features/>
     <Plan/>
     {/* <Network/> */}
     <Coustomer/>
     <Footer/>
    </div>
  );
}

export default App;
