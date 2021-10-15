import './App.css';
import Navbar from "../Navbar/Navbar"
import Users from "../Users/Users"
import Not from "../Not/Not"
import Home from "../Home/Home"
import { Switch, Route, Redirect } from 'react-router-dom'
function App() {
  return(
  <div className="App">
    <header>
      <Navbar />
    </header>
    <main>
      <Switch>
        <Route path="/users">
        <Users />
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
  </div>)
}

export default App;
