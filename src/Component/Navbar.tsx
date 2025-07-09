import React, { useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation();
 const menuRef = useRef<HTMLDivElement>(null);
 const navbarRef = useRef<HTMLDivElement>(null);

const handleToggle = (e: React.MouseEvent)=>{
  e.stopPropagation();
  const menu = menuRef.current;
  const navbar = navbarRef.current;

  if(!menu || !navbar) return

  if(menu.classList.contains("d-none")){
    menu.classList.remove("d-none")
    navbar.classList.add("d-none")
  }
}

useEffect(()=>{
  const handleClickOutside = (e: MouseEvent)=>{
    if(menuRef.current && !menuRef.current.contains(e.target as Node)){
      menuRef.current.classList.add("d-none")
      navbarRef.current?.classList.remove("d-none")
    }
  }

  document.addEventListener("click", handleClickOutside)
  return ()=> document.removeEventListener("click", handleClickOutside)

}, [])

  return (
    <>
      <div ref={navbarRef} id="navbar" className='navbar-style'>

        <div id="navbar-mobile" className="">
          <Link to="/"><img src="/Icons/home.svg" alt="Home Icon" /></Link>
        </div>

        <div id="navbar-tablet" className="">
          <Link to="/">{t("navbar.welcome")}</Link>
        </div>

        <button onClick={handleToggle} ><img src="/Icons/burgermenu.svg" alt="menu icon" /></button>

      </div>
    

      <div className="navbar-style d-none d-lg-flex">
        <Link to="/">{t("navbar.welcome")}</Link>
        <div className="navbar-right-group">
          <Link to="aboutme">{t('navbar.aboutMe')}</Link>
          <Link to="portfolio">{t('navbar.portfolio')}</Link>
          <Link to="contact">{t('navbar.contact')}</Link>
        </div>
      </div>


      <div ref={menuRef} id="navbar-menu" className="d-none">
          <ul  className="navbar-ul text-center">
            <li><Link className="p-1 text-decoration-none space-grotesk navbar-li" to="/aboutme">{t('navbar.aboutMe')}</Link></li>
            <li><Link className="p-1 text-decoration-none space-grotesk navbar-li" to="/portfolio">{t('navbar.portfolio')}</Link></li>
            <li><Link className="p-1 text-decoration-none space-grotesk navbar-li" to="/contact">{t('navbar.contact')}</Link></li>
          </ul>
      </div>
    </>
  )
}

export default Navbar