import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home";
import saved from "./pages/saved";
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import Footer from "./components/footer";



const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/saved" component={saved} />

      </Wrapper>
      <Footer />
    </div>
  </Router>




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
