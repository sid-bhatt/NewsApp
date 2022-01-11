import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/general"><News key="general" category="general"/></Route>
        <Route exact path="/general"><News key="business" category="business"/></Route>
        <Route exact path="/general"><News key="entertainment" category="entertainment"/></Route>
        <Route exact path="/health"><News key="health" category="health"/></Route>
        <Route exact path="/science"><News key="science" category="science"/></Route>
        <Route exact path="/sports"><News key="sports" category="sports"/></Route>
        <Route exact path="/technology"><News key="technology" category="technology"/></Route>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
