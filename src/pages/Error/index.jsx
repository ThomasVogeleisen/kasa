import './style.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main>
      <div className="error-content main-content">
        <h1 className="error-title">404</h1>
        <p className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="error-text-link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  )
}

export default Error
