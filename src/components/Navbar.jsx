import { NavLink } from "react-router-dom";
import '/src/index.css'
import logo from '../assets/images/logo.png'


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white
      items-center justify-center flex font-bold shadow-md">
        <img src= {logo} alt="Logo" className="h-full w-full" />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ?
         "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ?
         "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;