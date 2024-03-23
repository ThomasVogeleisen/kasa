import './style.scss'
import logo_white from '../../assets/logo_white.png'

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={logo_white} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
