import './index.scss'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="Header">
            <img src={logo} alt="" />
            <ul>
                <li><Link>Personagens</Link></li>
                <li><Link>Localizações</Link></li>
                <li><Link>Episódios</Link></li>
            </ul>
        </header>

    )
}

export default Header