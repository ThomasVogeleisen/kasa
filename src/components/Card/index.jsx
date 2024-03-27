import './style.scss'
import PropTypes from 'prop-types'
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

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Card
