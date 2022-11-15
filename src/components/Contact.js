import { Button } from "./ButtonStyled";



function Contact(){
    return(
        <section className="contact">
            <div className="contact-item container">
                <h1>Хотите веб-сайт?</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                <span>
                    <input placeholder="Ваше имя" name="name" type="text"/>
                    <input placeholder="Ваш e-mail" name="name" type="text"/>
                </span>
                <textarea placeholder="Сообщение"></textarea>
                <Button>ОТПРАВИТЬ</Button>
            </div>
        </section>
    )
}

export default Contact;