import '../styles/Navbar.css'
import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AuthSidebarData, SidebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib'
import Cookies from 'js-cookie'
import { Button } from 'react-bootstrap'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!sidebar);

    function handleSignOut(e){
        e.preventDefault();
        Cookies.remove('token');
        window.location.reload();
    }

    let sidebarOptions;
    let token = Cookies.get('token');
    if(token){
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
                {/* {
                    () => {
                        if(Cookies.get('token').length > 0) return <button block type="submit" size="lg" className='sign-out-but' onClick={handleSignOut}>Sign Out</button>
                        console.log(Cookies.get('token').length);
                        
                    }
                } */}
                <button block type="submit" size="lg" className='sign-out-but' onClick={handleSignOut}>Sign Out</button>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
