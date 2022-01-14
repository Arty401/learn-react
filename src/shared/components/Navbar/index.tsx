import React, {useCallback} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ROUTES} from "../../../constants/routes";
import {useAuth} from "../../../hooks";

const Navbar = () => {
    const {onLogout, isLoggedIn} = useAuth()
    const navigate = useNavigate();

    const authButtons = useCallback(() => {
        if (!isLoggedIn) {
            return (
                <>
                    <button
                        type="button"
                        className="btn btn-outline-light me-2"
                        onClick={() => navigate(ROUTES.login)}
                    >
                        Login
                    </button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                </>
            );
        }

        return <button type="button" className="btn btn-warning" onClick={() => onLogout()}>Sign-out</button>;
    }, [isLoggedIn])

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to={ROUTES.main}
                             className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        React
                    </NavLink>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {isLoggedIn && (
                            <li className="nav-item">
                                <NavLink to={ROUTES.main} className="nav-link px-2 text-secondary">
                                    Home
                                </NavLink>
                            </li>
                        )}
                    </ul>

                    <div className="text-end">
                        {authButtons()}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
