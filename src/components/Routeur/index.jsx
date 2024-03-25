import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../../pages/Home'
import APropos from '../../pages/APropos'
import FicheLogement from '../../pages/FicheLogement'
import Error from '../../pages/Error'

function Routeur() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/FicheLogement/:idLogement" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default Routeur
