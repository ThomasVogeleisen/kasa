import './style.scss'
import Banner from '../../components/Banner'
import Colapse from '../../components/Colapse'
import montagne from '../../assets/banner/montagne.png'

function APropos() {
  return (
    <main>
      <div className="main-content">
        <Banner image={montagne} altImage="Montagnes enneigées" />
        <div className="a-propos-colapses-container">
          <Colapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Colapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Colapse
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Colapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs. Chaques logements correspondent aux critères de sécurités établies par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sue la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </main>
  )
}

export default APropos
