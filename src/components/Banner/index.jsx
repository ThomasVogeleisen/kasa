import './style.scss'
import PropTypes from 'prop-types'

function Banner({ title, image, altImage }) {
  return (
    <div className="banner-content">
      <img className="banner-img" src={image} alt={altImage} />
      {title ? (
        <h1 className="banner-text">{title}</h1>
      ) : (
        <div className="banner-filter"></div>
      )}
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
}

export default Banner
