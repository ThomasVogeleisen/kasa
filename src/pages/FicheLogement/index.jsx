import './style.scss'
import { useParams, Navigate } from 'react-router-dom'
import logements from '../../datas/logements'
import Carousel from '../../components/Carousel'
import Colapse from '../../components/Colapse'
import Tag from '../../components/Tag'
import Profil from '../../components/Profil'

function FicheLogement() {
  const { idLogement } = useParams()
  const datas = logements.filter((logement) => logement.id === idLogement)[0]

  //Verifier si le logement existe sinon renvoyer vers la page 404
  if (!datas) {
    return <Navigate to="/404" />
  }

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
          <div className="logement-bloc__profil">
            <Profil host={datas.host} rating={datas.rating} />
          </div>
        </div>
        <div className="logement-colapses">
          <div className="logement-colapses__colapse">
            <Colapse
              size="small"
              title="Description"
              content={datas.description}
            />
          </div>
          <div className="logement-colapses__colapse">
            <Colapse
              size="small"
              liste={true}
              title="Équipements"
              content={datas.equipments}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default FicheLogement
