import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function NavBar(props) {
    const [state, setState] = useState({
        showCollapsedMenu: false
    })

    const toggleMenu = () => {
        setState({
            showCollapsedMenu: !this.state.showCollapsedMenu
        })
    }
    const show = (state.showCollapsedMenu) ? "show" : "" ;
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.display} bg-${props.display}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        onClick={toggleMenu}
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse"+show} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.display === 'light' ? 'dark' : 'light'}`} >
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.display === 'light' ? 'dark' : 'light'} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar