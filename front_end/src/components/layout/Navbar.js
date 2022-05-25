import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Barbearia" /></Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/agendamento">Agendamento</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/midia">Mídia</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/QuemSomos">Quem Somos</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar