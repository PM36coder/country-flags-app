import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header Container */}
      <header className="bg-neutral-800 w-full h-16 px-4 md:px-6 shadow-md overflow-hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <div className="text-amber-50 font-extrabold text-xl">
            World Atlas
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6">
              <li>
                <NavLink to="/" className="text-white hover:text-amber-300">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-white hover:text-amber-300">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-white hover:text-amber-300">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/country" className="text-white hover:text-amber-300">Country</NavLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden text-white text-2xl">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-neutral-800 w-full px-4 py-4 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <NavLink to="/" onClick={closeMenu} className="text-white hover:text-amber-300">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu} className="text-white hover:text-amber-300">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu} className="text-white hover:text-amber-300">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/country" onClick={closeMenu} className="text-white hover:text-amber-300">Country</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
