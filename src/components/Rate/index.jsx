import './style.scss'
import PropTypes from 'prop-types'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Rate({ rate }) {
  let stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(<img key={i} className="star" src={starActive} alt="dd" />)
    } else {
      stars.push(<img key={i} className="star" src={starInactive} alt="dd" />)
    }
  }

  return <div className="rate-container">{stars}</div>
}

Rate.propTypes = {
  rate: PropTypes.string.isRequired,
}

export default Rate
