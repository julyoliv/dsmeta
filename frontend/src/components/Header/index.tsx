import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return(
      <header>
        <div className="dsmeta-logo-container">

            <img src= {logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por 
                <a href="https://github.com/julyoliv" target="blank" rel="noopener noreferrer"> @julyoliv </a> 
            </p>

        </div>
    </header>
  )
}

export default Header
