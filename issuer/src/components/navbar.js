//components//navbar.js
import './navbar.css';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import decode from 'jwt-decode';

const Navbar = () =>{
    const dispatch = useDispatch();
    const history = useNavigate();
    const locate = useLocation();
    
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
    
    const logOut = () => {
       dispatch({ type: 'LOGOUT' });

       history('/login');

       setUser(null);
    }
   
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodeToken = decode(token);

            if(decodeToken.exp * 1000 < new Date().getTime()) logOut();
        }

        setUser(JSON.parse(window.localStorage.getItem('profile')));
    }  , [locate]);

    
    return (
        <div className='row'>
          <nav>
              <div className="nav-wrapper">
                  <div className='name'> 
                      <Link to='/' className="black-text">Issuer</Link> 
                  </div>
                  <div className='motto'> 
                      Put down your issues to sleep...
                  </div>
                  <ul className="right comp">
                          { user ? (
                          <li>
                              <button className="btn grey waves-effect waves-light" onClick={ logOut } >
                                  <Link to="/" className='black-text'> 
                                      LOGOUT 
                                  </Link>
                              </button>
                          </li>
                          ) : (
                          <li>
                              <button className="btn black waves-effect waves-light">
                                  <Link to="/login" className='blue-text'> 
                                      LOGIN
                                  </Link> 
                              </button>
                          </li>
                         ) }
                  </ul>
              </div>
          </nav>
        </div>
    );
}

export default Navbar;

