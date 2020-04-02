import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import homepage from './component/homepage';
import about from './component/about';
import contact from './component/contact';
// import CustomNavbar from './component/CustomNavbar';
import Navbar from './component/NewNavbar';

function App() {
  return(
    <div className="container">

    <Router>
        <Navbar />
        <Route exact path="/" component={homepage}/>
        <Route path="/about" component={about}/>
        <Route path="/contact" component={contact}/>
      
    </Router>
    
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
