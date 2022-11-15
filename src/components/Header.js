import laptop from '../img/Frame.svg';
import menu from '../img/menu.png';
import { Button } from './ButtonStyled';


function Header(){
      return(
        <header className="header container">
            <div className="header-upside">
                <div className="header-logo">
                    <a>WD</a>
                </div>

                <div className="header-links">
                    {
                    ['Главная', 'Об авторе', 'Работы', 'Процесс', 'Контакты'].map(function(item, index) {
                        return(
                        <a className="header-links--item">{item}</a>
                        )
                    })
                    }
                </div>
                <img src={menu} className="menu" alt="menu"/>
            </div>
            <div className="header-below">
                   <img src={laptop} alt="Laptop"/>
                   <span className='header-design'>
                       <h1>Дизайн и верстка</h1>
                       <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                       <Button>НАПИСАТЬ МНЕ</Button>
                   </span>
            </div>
        </header>
      )
}

export default Header;