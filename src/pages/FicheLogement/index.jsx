import './style.scss'
import { useParams } from 'react-router-dom'
import logements from '../../datas/logements'
import Carousel from '../../components/Carousel'

function FicheLogement() {
  const { idLogement } = useParams()
  const datas = logements.filter((logement) => logement.id === idLogement)[0]
  console.log(datas)
  return (
    <main>
      <div className="logement-content main-content">
        <Carousel pictures={datas.pictures} />
      </div>
    </main>
  )
}

export default FicheLogement
