import './style.scss'
import logements from '../../datas/logements'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bord_de_mer from '../../assets/banner/bord_de_mer.png'

function Home() {
  return (
    <main>
      <div className="home-content main-content">
        <Banner
          title="Chez vous, partout et ailleurs"
          image={bord_de_mer}
          altImage="Photo de falaises en bord de mer"
        />
        <div className="cards-container">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              style={{
                backgroundImage: `url('${logement.cover}')`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
