import { faGithubSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/Max_side.png'
import './index.scss'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='sub-logo' src={LogoSubtitle} alt="max" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/max-mason-834a348a"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" className="linkedin-link" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/maxmason007"
                    >
                        <FontAwesomeIcon icon={faGithubSquare} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/MaxMason007"
                    >
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Sidebar