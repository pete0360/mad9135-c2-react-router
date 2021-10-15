import './App.css';
import Navbar from "../Navbar/Navbar"
import People from "../People/People"
import Not from "../Not/Not"
import Home from "../Home/Home"
import { Switch, Route, Redirect } from 'react-router-rom'
function App() {
  <div className="App">
    <header>
      <Navbar />
    </header>
    <main>
      <Switch>
        <Route path="/people">
        <People />
        </Route>
        <Route path="/404">
        <Not />
        </Route>
        <Route 
        path="/"
        exact>
        <Home />
        </Route>
        <Redirect to = "/404" />
      </Switch>
    </main>
  </div>
}

export default App;
