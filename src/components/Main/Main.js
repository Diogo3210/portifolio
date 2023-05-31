import './Main.css'

const Main = () => {
    return (
        <div id='container_main'>
            <section id="introducing">
                <h1>Olá Mundo, Meu nome é</h1>
                <h2>Diogo Alves.</h2>
                <h2>E eu sou programador</h2>
                <p>Sou analista e desenvolvedor de sistemas, focado em desenvolvimento web e apaixonado por reinventar!</p>
            </section>
            <section className='section_main'>
                <h2>Sobre Mim</h2>
                <p>Olá! Meu nome é Diogo sou estudante de Análise e desenvolvimento de sistemas</p>
            </section>
            <section className='section_main'>
                <h2>Com o que já trabalhei ?</h2>
                <p>Totvs curitiba</p>
            </section>
            <section className='section_main'>
                <h2>Meus Projetos</h2>
                <ul>Projeto 1</ul>
                <ul>Projeto 2</ul>
                <ul>Projeto 3</ul>
            </section>
            <section className='section_main'>
                <h1>Contato</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat at est similique expedita velit perspiciatis eum hic eos. Ipsam impedit earum corporis voluptates ducimus perspiciatis laudantium eaque aliquid vel.</p>
            </section>
        </div>
    )
}

export default Main