import { useEffect, useState } from "react";
import './header.css';
import 'remixicon/fonts/remixicon.css';

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(true)
    const [headerShadow, setHeaderShadow] = useState<boolean>(false);

    const handleShadow = () => {
        if (window.scrollY >= 50) {
            setHeaderShadow(true);
        } else {
            setHeaderShadow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleShadow);
        return() => {
            window.removeEventListener('scroll', handleShadow);
        }
    }, [])

    const handleShow = () => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }

    return(
        <div className={headerShadow ? "header shadow-header" : "header"}>
            <nav>
                <a href="#" className="nav__logo">STARCOFFEE</a>
                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        {["HOME", "POPULAR", "ABOUT US", "PRODUCTS", "CONTACT"].map(item => (
                            <li><a href={`#${item.toLowerCase().replace(" ", "")}`} className="nav__link">{item}</a></li>
                        ))}
                    </ul>
                    <div className="nav__close">
                        <i className="ri-close-large-line" onClick={handleShow}/>
                    </div>
                </div>
                <div className="nav__toggle">
                    <i className="ri-apps-2-fill" onClick={handleShow}/>
                </div>
            </nav>
        </div>
    )
}

export default Header
