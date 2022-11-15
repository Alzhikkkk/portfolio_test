import vk from '../img/vk.svg';


function Footer(){
     return(
        <footer className="footer container">
            <span className="footer-info">
                <h1>Иванов Иван</h1>
                <p>(с) 2018. Все права защищены.</p>
            </span>
            <span className="footer-social">
                <img src={vk} alt="VK"/>
                <img src={vk} alt="VK"/>
                <img src={vk} alt="VK"/>
            </span>
        </footer>
     )
}

export default Footer;