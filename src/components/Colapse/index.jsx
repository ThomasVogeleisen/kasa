import './style.scss'
import { useState } from 'react'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import btn_collapse from '../../assets/btn_collapse.png'

function Colapse({ size, liste, title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const contentRef = useRef()

  function toggleCollapse() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-title small">
        <h2 className={`collapse-title-h2 ${size}`}>{title}</h2>
        <img
          onClick={toggleCollapse}
          className={
            isOpen ? 'collapse-title-btn rotate-btn' : 'collapse-title-btn'
          }
          src={btn_collapse}
          alt="open content"
        />
      </div>
      <div
        className="collapse-content"
        ref={contentRef}
        style={
          isOpen ? { height: contentRef.current.scrollHeight } : { height: 0 }
        }
      >
        {liste ? (
          <ul className="collapse-list">
            {content.map((item, index) => (
              <li key={index} className="collapse-list-content">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse-text-content">{content}</p>
        )}
      </div>
    </div>
  )
}

Colapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  size: PropTypes.string,
  liste: PropTypes.bool,
}

Colapse.defaultProps = {
  size: '',
  liste: false,
}

export default Colapse
