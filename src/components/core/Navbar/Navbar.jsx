import React, {useState, useEffect} from 'react';
import logo from '../../../assets/img/logo.png';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';



const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}><img width={60}
    height={60} src={logo} alt="JUMANDGYM"/></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" 
                        smooth={true} 
                        duration={200} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Inicio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="description"
                        smooth={true} 
                        duration={200} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>Descripción</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="methodology"
                        smooth={true} 
                        duration={200} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>Metodología</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="plans"
                        smooth={true} 
                        duration={200} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>Planes</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true} 
                        duration={200} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>Contacto</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink target='_parent'  rel='noreferrer' href='https://capable-crumble-8aa1cc.netlify.app/' to="https://capable-crumble-8aa1cc.netlify.app/">APP</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar