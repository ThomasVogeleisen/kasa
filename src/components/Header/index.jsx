import { Link } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Logo Kasa" />
        <nav>
          <Link className="nav-links" to="/">
            Accueil
          </Link>
          <Link className="nav-links" to="/A-Propos">
            A Propos
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
