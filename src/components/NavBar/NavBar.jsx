import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import logo from './logo.gif'

const NavBar = ({ logout }) => {



    const handleLogout = () => {
        // Mostrar notificación de confirmación de logout
        toast.info('¿Estás seguro de que deseas cerrar sesión?', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
            closeOnClick: true,
            draggable: true,
            pauseOnHover: true,
            progress: undefined,
            // Agrega botones personalizados en la notificación
            closeButton: (
                <div className='custom-toast-buttons-container'>
                    <button className='custom-toast-button custom-toast-button-yes' onClick={confirmLogout}>
                        Sí
                    </button>
                    <button className='custom-toast-button custom-toast-button-no' onClick={cancelLogout}>
                        No
                    </button>
                </div>
            ),
            closeToast: false,
        });
    };

    const confirmLogout = () => {
        logout();
        toast.dismiss();
    };

    const cancelLogout = () => {
        // Cierra la notificación
        toast.dismiss();
    };



    return (
        <nav className='navbar'>
                <div className='navbar-logo'>
                    <h1 className='rick-and-morty'>Rick and morty</h1>
                </div>
            <div className='navbar-links'>
                <NavLink className={`navlink ${({ isActive }) => isActive ? 'active' : 'disabled'}`} to='/home'>Home</NavLink>
                <NavLink className={`navlink ${({ isActive }) => isActive ? 'active' : 'disabled'}`} to='/about'>About</NavLink>
                <NavLink className={`navlink ${({ isActive }) => isActive ? 'active' : 'disabled'}`} to='/favorites'>Favorites</NavLink>
                <button className='logout-button' onClick={handleLogout}><FontAwesomeIcon className='icon-logout' icon={faRightFromBracket} /></button>
            </div>
            <div style={{ position: 'absolute' }}>
                <ToastContainer />
            </div>
        </nav>





    )
}

export default NavBar

