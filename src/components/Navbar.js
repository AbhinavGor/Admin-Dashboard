import '../styles/Navbar.css'
import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AuthSidebarData, SidebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib'
import Cookies from 'js-cookie'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!sidebar);
    
    const isLoggedIn = Cookies.get('isLoggedIn') === 1;

    let sidebarOptions;
    if(Cookies.get('token')){
        sidebarOptions = AuthSidebarData;
    }else{
        sidebarOptions = SidebarData;
    }

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to='#' className='menu-bars'><FaIcons.FaBars onClick={toggleSidebar}/></Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={toggleSidebar}>
                    <li className='navbar-toggle'><Link to='#' className='menu-bars'><AiIcons.AiOutlineClose /></Link></li>
                    {sidebarOptions.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
