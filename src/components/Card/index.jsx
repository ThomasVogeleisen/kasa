import './style.scss'

function Card({
  id,
  title,
  cover,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
  style,
}) {
  return (
    <div style={{ ...style }} className="card">
      <p className="cart-title">{title}</p>
    </div>
  )
}

export default Card
