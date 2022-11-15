import ava from '../img/ava.png'

function Skill(){
    return(
        <section className="skill container">
              <div className="skill-items">
                    <h1>Мои навыки</h1>
                    <span className="skill-items--name">
                        <span>
                            <p>Adobe Photoshop</p>
                            <span className='skills-score'><i></i></span>
                        </span>
                        <span>
                            <p>Adobe Photoshop</p>
                            <span className='skills-score'><i></i></span>
                        </span>
                        <span>
                            <p>Adobe Photoshop</p>
                             <span className='skills-score'><i></i></span>
                        </span>
                    </span>
              </div>
              <img src={ava} alt="Ava" />
        </section>
    )
}

export default Skill;