import './style.scss'
import PropTypes from 'prop-types'

function Tag({ tagList }) {
  return (
    <>
      {tagList.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </>
  )
}

Tag.propTypes = {
  tagList: PropTypes.array.isRequired,
}

export default Tag
