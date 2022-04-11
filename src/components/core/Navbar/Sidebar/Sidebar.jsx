import React from 'react';
import {
SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
SideBtnWrap,
SidebarRoute } from "./SidebarElements";

const Sidebar = ({isOpen, toggle} ) => {
  return (

    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Inicio
          </SidebarLink>
          <SidebarLink to="description" onClick={toggle}>
            Descripción
          </SidebarLink>
          <SidebarLink to="methodology" onClick={toggle}>
            Metodología
          </SidebarLink>
          <SidebarLink to="plans" onClick={toggle}>
            Planes
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">
              APP
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>

    // <div className="sidebarContainer">
    //     <div className="closeIcon">
    //         <HiOutlineChevronDoubleUp className="closeIcon__icon"/>
    //     </div>
    //     <div className="menu">
    //         <div className="menu__links">
    //         </div>
    //     </div>

    //     <div className="wrap">
    //         <div className="wrap__route">
    //         </div>
    //     </div>
    // </div>
  )
}

export default Sidebar