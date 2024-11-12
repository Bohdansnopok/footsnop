import './Content.css';
import messi from '../../../images/messi.png'
import ig from '../../../images/Instagram_icon.svg'

export function Content() {
    return (
        <section className="content flex">
            <div className="leftContent">
                <img src={messi} alt=""/>
            </div>

            <div className="rightContent">
                <div className="wrapper">
                    <h1 className="content__title">
                        Онлайн магазин <br/>
                        <span>Футбольних речей</span> <br/>
                    </h1>

                    <a href="#" className="btn">
                        <p>Подивитися </p>
                        <p>товар</p>
                    </a>
                </div>

                <div className="contacts flex">
                    <div className="contacts__content flex">
                        <a href="https://www.instagram.com/footsnop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                           className="ig">
                            <img src={ig} alt=""/>
                            footsnop
                        </a>
                        <a href="https://www.instagram.com/_snop_ok10?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                           className="ig">
                            <img src={ig} alt=""/>
                            _snop_ok10
                        </a>
                    </div>

                    <div className="other">
                        <a href="mailto:footsnop@gmail.com">
                            footsnop@gmail.com
                        </a>
                        <a href="tel:+380984282375">
                            +380984282375
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}