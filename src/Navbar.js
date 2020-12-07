import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links} from './data'
import RLogo from './images/RLogo.png'
import {NavLink} from 'react-router-dom'


const Navbar = () => {

  const [isToggle, setIsToggle] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(()=> {
    let linksHeight = linksRef.current.getBoundingClientRect().height
    if (isToggle){
      linksContainerRef.current.style.height = `${linksHeight}px` 
    } else {
      linksContainerRef.current.style.height = `0px`
    }
  },[isToggle])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink exact to="/">
            <img className="logo-img" src={RLogo} alt="name" />
          </NavLink>
          <button className="nav-toggle" onClick={() => setIsToggle(!isToggle)}>
            <FaBars />
          </button>
        </div>

        <div className="links-containa" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text,klass } = link;
              return (
                <NavLink className="nav-link" activeClassName={klass} to={url} key={id}>
                  <li> {text}</li>
                </NavLink>
              );
            })}
          </ul>
          <NavLink to='/getstarted'>
            <button className="get-started">Get started</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
