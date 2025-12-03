import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    Countries Api
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <nav className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink end to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/entities" className="nav-link">
                                Paises
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;