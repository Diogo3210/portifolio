import './Header.css'

const Header = () => {
    return (
        <div id="container_header">
            <div id="logo">
                <h1></h1>
            </div>
            <div id="nav">
                <ol>
                    <li><a href="/#about">Sobre</a></li>
                    <li><a href="/#experience">Experiência</a></li>
                    <li><a href="/#projects">Projetos</a></li>
                    <li><a href="/#contact">Contato</a></li>
                </ol>
            </div>
        </div>
    )
}

export default Header