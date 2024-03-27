import './style.scss'
import PropTypes from 'prop-types'
import Host from '../Host'
import Rate from '../Rate'

function Profil({ host, rating }) {
  return (
    <div className="profil-container">
      <Host name={host.name} picture={host.picture} />
      <Rate rate={rating} />
    </div>
  )
}

Profil.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.string.isRequired,
}

export default Profil
