import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo travel.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const isActive = (path, hash = "") => {
    return location.pathname === path && location.hash === hash;
  };

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container mt-1">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="DTI Logo" />
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={` navbar-collapse sidebar ${sidebarOpen ? "show" : ""}`}
          id="navMenu"
        >
          {/* MENU KIRI */}
          {/* LOGO SIDEBAR MOBILE */}
          <div className="sidebar-header d-lg-none mb-4">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </div>
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={`nav-link ${isActive("/", "") ? "active" : ""}`}
                onClick={() => {
                  setSidebarOpen(false);
                  window.scrollTo(0, 0, { behavior: "instant" });
                }}
              >
                Beranda
              </NavLink>
            </li>
            <li className="nav-item dropdown-nav">
              <span className="nav-link dropdown-toggle-nav">Layanan</span>

              <ul className="dropdown-menu-nav">
                <li>
                  <NavLink
                    to="/umrah"
                    className="dropdown-item"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Paket Umroh
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/haji"
                    className="dropdown-item"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Paket Haji
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/#layanan"
                    className="dropdown-item"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Wisata Halal
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown-nav">
              <span
                className="nav-link dropdown-toggle-nav"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                Tentang Kami
              </span>

              <ul className={`dropdown-menu-nav ${openDropdown ? "show" : ""}`}>
                <li>
                  <NavLink
                    to="/profile"
                    className="dropdown-item"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Profil Perusahaan
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/gallery"
                    className="dropdown-item"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Galeri
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Artikel
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                to="/#testimoni"
                className={`nav-link ${isActive("/", "#testimoni") ? "active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                Testimoni
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#kontak"
                className={`nav-link ${isActive("/", "#kontak") ? "active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                Kontak
              </Link>
            </li>
          </ul>

          {/* LOGIN BUTTON KANAN */}
          <div className="d-flex">
            <Link
              to="/login"
              className="btn-login"
              onClick={() => setSidebarOpen(false)}
            >
              <i className="bi bi-box-arrow-in-right me-1"></i>
              Login
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
