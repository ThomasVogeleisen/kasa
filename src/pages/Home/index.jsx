import '../../styles/Home.scss'
import Banner from '../../components/Banner'
import bord_de_mer from '../../assets/banner/bord_de_mer.png'

function Home() {
  return (
    <main>
      <div className="home-content">
        <Banner
          title="Chez vous, partout et ailleurs"
          image={bord_de_mer}
          altImage="Photo de falaises en bord de mer"
        />
      </div>
    </main>
  )
}

export default Home
