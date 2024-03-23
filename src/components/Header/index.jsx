import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/logo.png'

function Header() {
  const location = useLocation()

  return (
    <header>
      <div className="header-content">
        <img className="logo-kasa" src={logo} alt="Logo Kasa" />
        <nav>
          <Link
            className={
              location.pathname === '/' ? 'nav-links active' : 'nav-links'
            }
            to="/"
          >
            Accueil
          </Link>
          <Link
            className={
              location.pathname === '/A-Propos'
                ? 'nav-links active'
                : 'nav-links'
            }
            to="/A-Propos"
          >
            A propos
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
