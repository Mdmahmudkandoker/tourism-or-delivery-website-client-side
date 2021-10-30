import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../context/Context'
import { useFirebase } from '../../firebase/firebaseAuth';

const Nav = () => {
const {user} = useContext(Context);
const {logOut} = useFirebase();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand ">Mahmud Travels</span>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <NavLink to='/' className="nav-link active" aria-current="page">HOME</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to='/destinations' className="nav-link active" aria-current="page">DESTINATIONS</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to='/about' className="nav-link active" aria-current="page">ABOUT US</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to='/contact' className="nav-link active" aria-current="page">CONTACT US</NavLink>
              </li>
              {!user? 
              [<li className="nav-item">
              <NavLink to='/login' className="nav-link active" aria-current="page">LOGIN</NavLink>
              </li>,
                <li className="nav-item">
                <NavLink to='/register' className="nav-link active" aria-current="page">REGISTER</NavLink>
                </li>]
              :
             [
              <li className="nav-item">
              <NavLink to='/allbookings' className="nav-link active" aria-current="page">ALL BOOKINGS</NavLink>
          </li>,
          <li className="nav-item">
              <NavLink to='/mybookings' className="nav-link active" aria-current="page">MY BOOKINGS</NavLink>
          </li>,
          <li className="nav-item">
              <NavLink to='/addlocation' className="nav-link active" aria-current="page">ADD NEW DESTINATION</NavLink>
          </li>
             ]
              
            }
              
            </ul>
          </div>
          <div className="user" style={{color:'white'}}>
           
              <p>{user? user.displayName? user.displayName : user.email  : null} - {user?  <span  style={{cursor:'pointer'}} onClick={logOut}>Logout</span>  : null}</p>
          </div>
        </div>
      </nav>
    )
}

export default Nav
