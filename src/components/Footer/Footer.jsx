import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div class="footer">
            <p>Alan Luna 2023 - Todos los derechos reservados &copy; 2023</p>
            <Link to="https://github.com/AlanLuna-00" target="_blank" rel="noopener noreferrer" class="github"><FontAwesomeIcon className='github' icon={faGithub} /></Link>
            <Link to="https://www.linkedin.com/in/alan-luna-304655214/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='linkedin'icon={ faLinkedin } /></Link>
        </div>
    )
}

export default Footer