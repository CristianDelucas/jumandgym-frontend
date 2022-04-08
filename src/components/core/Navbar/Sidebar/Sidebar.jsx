import React from 'react'
import "./Sidebar.scss";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
        <div className="closeIcon">
            <HiOutlineChevronDoubleUp className="closeIcon__icon"/>
        </div>
        <div className="menu">
            <div className="menu__links">
            </div>
        </div>

        <div className="wrap">
            <div className="wrap__route">
            </div>
        </div>
    </div>
  )
}

export default Sidebar