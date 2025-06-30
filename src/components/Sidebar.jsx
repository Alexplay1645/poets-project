import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(prev => !prev);
  };

  return (
    <nav className="nav-bar">
      <NavLink to="/">Головна</NavLink>

      <div className="dropdown">
        <span className="dropdown-title" onClick={toggleDropdown}>
          Поети
        </span>

        {open && (
          <ul className="dropdown-menu persistent">
            <li><NavLink to="/poet/1">Т. Шевченко</NavLink></li>
            <li><NavLink to="/poet/2">І. Франко</NavLink></li>
            <li><NavLink to="/poet/3">Л. Українка</NavLink></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Sidebar;
