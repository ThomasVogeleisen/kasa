import './style.scss'
import { useState } from 'react'
import { useRef } from 'react'
import btn_collapse from '../../assets/btn_collapse.png'

function Colapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const contentRef = useRef()
  if (contentRef.current) console.log(contentRef.current.scrollHeight)

  function toggleCollapse() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-title">
        <h2 className="collapse-title-h2">{title}</h2>
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
        <p className="collapse-text-content">{content}</p>
      </div>
    </div>
  )
}

export default Colapse
