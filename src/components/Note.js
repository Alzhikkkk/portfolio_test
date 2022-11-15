import microsoft from '../img/microsoft.png';
function Note(){
    return(
        <section className="note">
            <div className="notes">
                 <span className='notes-item notes-paper'></span>
                 <span className='notes-item notes-laptop'></span>
                 <span className='notes-item notes-paper'></span>
                 <span className='notes-item notes-laptop'></span>
                 <span className='notes-item notes-laptop'></span>
                 <span className='notes-item notes-paper'></span>
                 <span className='notes-item notes-laptop'></span>
                 <span className='notes-item notes-paper'></span>
            </div>
            <div className="notes-microsoft container">
                <img src={microsoft} alt="Microsoft"/>
                <img src={microsoft} alt="Microsoft"/>
                <img src={microsoft} alt="Microsoft"/>
                <img src={microsoft} alt="Microsoft"/>
            </div>
        </section>
    )
}

export default Note;