import play from '../img/play.svg';

function Work(){
    return(
        <section className="work container">
            <h1>Как я работаю</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            <span>
                <img src={play} alt="Play Button"/>
            </span>
        </section>
    )
}

export default Work;