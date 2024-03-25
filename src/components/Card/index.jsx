import './style.scss'
import { Link } from 'react-router-dom'

function Card({ id, title, style }) {
  return (
    <Link className="card-link" to={`/FicheLogement/${id}`}>
      <div style={{ ...style }} className="card">
        <p className="cart-title">{title}</p>
      </div>
    </Link>
  )
}

export default Card
