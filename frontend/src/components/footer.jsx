import React, { useState } from "react";
import logo from "../assets/logo travel.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer id="kontak">
      <div className="container">
        <div className="row g-4">
          {/* KOLOM 1 - LOGO & DESKRIPSI */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo mb-1">
              <img src={logo} alt="DTI logo" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Membantu Lebih Dari 24.000 Travelers Menemukan Perjalanan
              Impiannya Ke Berbagai Destinasi Sejak 2014. Mulai Dari Asia,
              Eropa, Amerika Hingga Afrika.
            </p>{" "}
            <br />
            <p className="footer-desc">Nomor PPIU: 91203002216360003</p> <br />
            <p className="footer-desc">Nomor PIHK: 91203002216360002</p>
            <div className="social-icons mt-4">
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* KOLOM 2 - LAYANAN */}
          <div className="col-lg-2 col-6">
            <h6>Layanan</h6>
            <Link to="/haji" className="footer-link">
              Haji
            </Link>
            <Link to="/umrah" className="footer-link">
              Umrah{" "}
            </Link>
          </div>

          {/* KOLOM 3 - PERUSAHAAN */}
          <div className="col-lg-2 col-6">
            <h6>Perusahaan</h6>
            <a href="#">Tentang Kami</a>
            <a href="#">Tim Kami</a>
            <a href="#">Legalitas</a>
            <a href="#">Karir</a>
            <Link to="/blog" className="footer-blog-link">
              Blog
            </Link>
          </div>

          {/* KOLOM 4 - KONTAK */}
          <div className="col-lg-4 col-md-6">
            <h6>Kontak Kami</h6>

            <div className="footer-contact">
              <i className="bi bi-geo-alt-fill"></i>
              <span>
                Ruko Golden Road Blok C27 No 57 BSD City - Tangerang Selatan
              </span>
            </div>
            <div className="footer-contact">
              <i className="bi bi-geo-alt-fill"></i>
              <span>Komplek Ruko Patiunus No 07 Kota Pasuruan Jatim</span>
            </div>

            <div className="footer-contact">
              <i className="bi bi-telephone-fill"></i>
              <div className="footer-text">
                <span>+62813 7090 7919 (Gita - BSD City)</span>
              </div>
            </div>
            <div className="footer-contact">
              <i className="bi bi-telephone-fill"></i>
              <div className="footer-text">
                <span>+62813 8991 9754 (Ratu - BSD City)</span>
              </div>
            </div>
            <div className="footer-contact">
              <i className="bi bi-telephone-fill"></i>
              <div className="footer-text">
                <span>+62877 6396 0265 (Mia - Jawa TImur)</span>
              </div>
            </div>

            <div className="footer-contact">
              <i className="bi bi-envelope-fill"></i>
              <span>adm.dtravelind@gmail.com</span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2025 DTI. Terdaftar di Kementerian Haji RI.</p>

          <div className="footer-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <div className="wa-container">
        {open && (
          <div className="wa-list">
            <a
              href="https://wa.me/6281370907919"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp"></i> CS Gita
            </a>

            <a
              href="https://wa.me/6281389919754"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp"></i> CS Ratu
            </a>

            <a
              href="https://wa.me/6287763960265"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp"></i> CS Mia
            </a>
          </div>
        )}

        <button className="wa-float" onClick={() => setOpen(!open)}>
          <i className="bi bi-whatsapp"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
