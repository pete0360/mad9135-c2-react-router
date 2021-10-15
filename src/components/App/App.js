import './App.css';
import Navbar from "../Navbar/Navbar"
import Users from "../Users/Users"
import User from "../User/User"
import Not from "../Not/Not"
import Home from "../Home/Home"
import Address from "../Address/Address"
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'


function App() {
  const { pathname } = useLocation()
  const [list, setList] = useState([])

  useEffect(() => {
    (async function () {
      if (pathname.indexOf('/users') > -1) {
        let resp = await fetch('https://randomuser.me/api/?nat=ca&seed=0360&format=json&results=16');
        let data = await resp.json();
        console.log('Fetched the users. Updating user state');
        setList(data.results);
        console.log(data.results)
      }
    })();
  }, [pathname]);

console.log({list})

  return (
  <div className="App">
    <header>
      <Navbar />
    </header>
    <main >
      <Switch>
      <Route path="/users/:id">
            <User list = { list }/>
          </Route>
        <Route path="/users">
          <Users list = { list }/>
        </Route>
        
        <Route path="/address">
        <Address />
        </Route>
        <Route path="/404">
        <Not />
        </Route>

        <Route 
        path="/"
        exact
        render={() => {
            return <Home />;
          }}
        />

        <Redirect to = "/404" />
      </Switch>
    </main>
  </div>)
}

export default App;
