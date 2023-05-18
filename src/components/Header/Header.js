import './Header.css'

const Header = () => {
    return (
        <div className='container_header'>
            <h1>Meu Header</h1>
            <nav id="nav_principal">
                <a href="#aboutMe">Sobre</a>
                <a href="#experience">Experiência</a>
                <a href="#projects">Projetos</a>
            </nav>
        </div>
    )
}

export default Header