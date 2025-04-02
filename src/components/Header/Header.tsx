import { useEffect, useState } from 'react'
import './header.css'
import 'remixicon/fonts/remixicon.css'

const Header = () => {


    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/ }

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */ }

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */ }

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/ }

    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/ }

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */ }

    {/*close ikon osztálya: ri-close-large-line */ }

    {/*toggle ikon osztálya: ri-apps-2-fill */ }

    const [showMenu, setShowMenu] = useState(false)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY >= 50)
        }
        window.addEventListener("scroll", handleScroll)
    })

    return (
        <div className={`header ${shadow && "shadow-header"}`}>
            <nav>
                <a href='#' className='nav__logo'>STARCOFFEE</a>
                <div className={`nav__menu ${showMenu && "show-menu"}`}>
                    <ul className='nav__list'>
                        {["HOME", "POPULAR", "ABOUT US", "PRODUCTS", "CONTACT"].map(item => (
                            <li>
                                <a href={`#${item.toLowerCase().replace(" ", "")}`} onClick={() => setShowMenu(false)} className='nav__link'>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setShowMenu(false)} className='nav__close'>
                        <i className='ri-close-large-line'></i>
                    </div>
                </div>
                <div onClick={() => setShowMenu(true)} className='nav__toggle'>
                    <i className='ri-apps-2-fill'></i>
                </div>
            </nav>
        </div>
    )
}

export default Header
