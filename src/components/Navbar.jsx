import { NavLink, useNavigate } from "react-router-dom"
import logo from '../img/logo.jpg'
const Navbar = () => {
  const navigate = useNavigate()
  const navHome = ()=>{
    navigate('/')
  }
  return (
    <nav className='primery-nav'>
    <img
              src={logo}
              alt="logo"
              className="img-thumbnail m-2 logo"
              width={'50px'}
              onClick={navHome}
            ></img>
    <NavLink to='/calcHelp'>CalcHelp</NavLink>
    <NavLink to='/calc'>Calc</NavLink>
    
    </nav>
  )
}

export default Navbar