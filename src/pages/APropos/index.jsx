import '../../styles/Apropos.scss'
import Banner from '../../components/Banner'
import montagne from '../../assets/banner/montagne.png'

function APropos() {
  return (
    <main>
      <div className="home-content">
        <Banner image={montagne} altImage="Montagnes enneigées" />
      </div>
    </main>
  )
}

export default APropos
