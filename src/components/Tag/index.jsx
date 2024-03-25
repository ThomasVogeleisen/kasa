import './style.scss'

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

export default Tag
