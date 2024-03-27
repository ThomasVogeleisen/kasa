import './style.scss'
import PropTypes from 'prop-types'

function Host({ name, picture }) {
  const nameArray = name.split(' ')
  return (
    <div className="host-container">
      <p className="host-title">
        {nameArray[0]}
        <br />
        {nameArray[1]}
      </p>
      <img className="host-picture" src={picture} alt={name} />
    </div>
  )
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Host
