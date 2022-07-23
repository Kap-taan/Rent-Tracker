import React, { useContext } from 'react'
import AuthContext from '../stores/AuthContext'

const Navbar = () => {

    const { logout } = useContext(AuthContext);

    const { user } = useContext(AuthContext);

    const logoutHandler = () => {
        logout().then(() => {
            console.log('Logout Successful');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <nav>
            <h4 className="nav_heading"><a href="/">Rent Tracker</a></h4>
            {user && <button onClick={logoutHandler} className="btn">Logout</button>}
        </nav>
    )

}

export default Navbar