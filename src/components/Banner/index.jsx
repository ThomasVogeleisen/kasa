import '../../styles/Banner.scss'

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

export default Banner
