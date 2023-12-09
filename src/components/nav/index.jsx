
import {Link, Outlet } from 'react-router-dom'
import "./nav.css"
const Navbar = () => {
  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navbar