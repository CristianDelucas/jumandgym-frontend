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
          <SidebarLink offset={-80} to="home" onClick={toggle}>
            Inicio
          </SidebarLink>
          <SidebarLink offset={-80} to="description" onClick={toggle}>
            Descripción
          </SidebarLink>
          <SidebarLink offset={-80} to="methodology" onClick={toggle}>
            Metodología
          </SidebarLink>
          <SidebarLink offset={-80} to="plans" onClick={toggle}>
            Planes
          </SidebarLink>
          <SidebarLink offset={-80} to="contact" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toggle}>
              APP
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar