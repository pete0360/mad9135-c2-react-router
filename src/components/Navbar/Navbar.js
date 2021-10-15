import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink activeClassName="active" className = "nav-item" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" className = "nav-item" to="/users">
        User List
      </NavLink>
      <NavLink activeClassName="active" className = "nav-item" to="/address">
        Address List
      </NavLink>
    </div>
  );
}