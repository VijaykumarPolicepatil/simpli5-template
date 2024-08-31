import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/simpli5-logo-n-01.png"; 

export function NavMenuToggle() {
    setTimeout(() => {
        const mainWrapper = document.querySelector("#main-wrapper");
        if (mainWrapper.classList.contains('menu-toggle')) {
            mainWrapper.classList.remove("menu-toggle");
        } else {
            mainWrapper.classList.add("menu-toggle");
        }
    }, 200);
}

const NavHeader = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="nav-header">
            <Link to="/dashboard" className="brand-logo">
                <img src={logo} alt="Simpli5 Logo" className="logo-img" />
            </Link>

            <div
                className="nav-control"
                onClick={() => {
                    setToggle(!toggle);
                    NavMenuToggle();
                }}
            >
                <div className={`hamburger ${toggle ? "is-active" : ""}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
    );
};

export default NavHeader;
