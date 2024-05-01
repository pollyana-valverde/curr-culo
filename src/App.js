import Cabecalho from './components/navbar';
import Aprensentacao from './components/Apresentacao';
import AboutMe from './components/aboutMe';
import Portifolio from './components/portifolio';
import Contato from './components/contato';
import Resumo from './components/resumo';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/navbar.css';
import './assets/css/apresentacao.css';
import './assets/css/aboutMe.css';
import './assets/css/resumo.css'
import './assets/css/portifolio.css';
import './assets/css/contato.css';
import './assets/css/footer.css';
import './assets/css/cores.css';



export default function App() {

  return (
    <>
      <Cabecalho />
      <div className="navEspaco"></div>
      <Aprensentacao />
      <AboutMe />
      <Resumo />
      <Portifolio />
      <Contato />
      <Footer />
    </>
  );
}


