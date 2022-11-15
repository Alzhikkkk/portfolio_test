import group from '../img/Group.svg'

function Project(){
    return(
        <section className="project">
            <div className='project-items container'>
            {
              ['40+', '40+', '40+', '40+', '40+', '40+'].map(function(item, index){
                return(
                <span>
                    <img src={group} alt="Group"/>
                    <p>{item} <i>projects</i></p>
                </span>
                )})
            }
            </div>
        </section>
    )
}

export default Project;