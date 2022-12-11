import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import downArrow from "../../assets/images/icon/navigation/downArrow.png";
import joseph from "../../assets/images/joseph.png";
import Hdown from "../../assets/images/icon/Hdown.svg";
import logo from "../../assets/images/whole.png";
import { authContext } from '../../Context/Context';

const Header = () => {
    const {loggedIn} = useContext(authContext)
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-white d-none d-md-flex">
          <div className="d-flex mx-5 me-auto">
            <Link to="/" className="navbar-brand">
              <img className="w-100" src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="me-auto" id="navbarSupportedContent">
            <form className="d-flex" style={{ width: "400px" }} role="search">
              <input
                className="form-control me-2 rounded-pill text-center w-100"
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </form>
          </div>
          {loggedIn ? (
            <div className="d-flex content-align-center align-items-center gap-2">
              <img src={joseph} alt="" />
              <span className="h5">
                Siddarth Goyal <img src={downArrow} alt="" />
              </span>
            </div>
          ) : (
            <span className=" h5 fw-bold">
              Create account.
              <Link
                className="text-primary fw-bold text-decoration-none"
                to="/"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalBox2"
              >
                It's free! <img src={Hdown} alt="" />
              </Link>
            </span>
          )}
        </nav>
      </div>
    );
};

export default Header;