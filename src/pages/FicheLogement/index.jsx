import './style.scss'
import { useParams } from 'react-router-dom'
import logements from '../../datas/logements'
import Carousel from '../../components/Carousel'
import Colapse from '../../components/Colapse'
import Tag from '../../components/Tag'

function FicheLogement() {
  const { idLogement } = useParams()
  const datas = logements.filter((logement) => logement.id === idLogement)[0]
  console.log(datas)
  return (
    <main>
      <div className="logement-content main-content">
        <Carousel pictures={datas.pictures} />
        <div className="logement-bloc">
          <div className="logement-bloc__desc">
            <h2 className="logement-bloc__desc--title">{datas.title}</h2>
            <p className="logement-bloc__desc--location">{datas.location}</p>
            <div className="logement-bloc__desc--tags">
              <Tag tagList={datas.tags} />
            </div>
          </div>
          <div className="logement-bloc__rate">
            <div className="logement-bloc__rate--host">{datas.host.name}</div>
            <div className="logement-bloc__rate--rate">{datas.rating}/5</div>
          </div>
        </div>
        <div className="logement-colapses">
          <div className="logement-colapses__colapse">
            <Colapse title="Description" content={datas.description} />
          </div>
          <div className="logement-colapses__colapse">
            <Colapse title="Équipements" content={datas.equipments} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default FicheLogement
