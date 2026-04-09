import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../css/haji.css";
import kabah from "../assets/kabah.jpg";

const Haji = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // langsung tanpa animasi
    });
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Hero Image */}
          <div className="hero-image">
            <img src={kabah} alt="kabah" />
          </div>

          {/* Hero Text */}
          <div className="hero-text">
            <div className="hero-badge">
              Program Haji Khusus Resmi Pemerintah
            </div>
            <h1>
              Haji Khusus 2026 <br />
              <em>Kuota Kemenhaj & Masa Tunggu 5-8 Tahun</em>
            </h1>
            <p>
              Haji Khusus menjadi pilihan ideal bagi Sobat yang ingin menunaikan
              ibadah haji dengan layanan lebih nyaman dan masa tunggu lebih
              singkat, sekitar 5–8 tahun. Dengan sistem maktab berbeda dari haji
              reguler sehingga pengelolaan jamaah lebih tertib dan eksklusif.
            </p>
            <div className="hero-btns">
              <a
                href="https://wa.me/6281389919754"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="bi bi-whatsapp me-2"></i> Konsultasi WA
              </a>
              <a href="#paket" className="btn-outline">
                Lihat Paket
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="paket" className=" mb-1">
        <div className="container">
          {/* ================= PAKET REGULER ================= */}
          <div className="position-relative mb-4">
            <div className="section-title text-center w-100">Paket Haji</div>
          </div>

          <div className="row g-3">
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <NavLink to="/umrah-detail" className="card-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label" id="furoda">
                      Haji Furoda
                    </span>
                    <img src={kabah} alt="Umroh Hemat" />
                  </div>

                  <div className="paket-body">
                    <div>
                      <div className="paket-name">
                        fasilitas bintang 5 - haji khusus masa antri 4 s/d 8
                        tahun{" "}
                      </div>

                      {/* INFO TAMBAHAN */}
                      <div className="paket-info">
                        <div className="info-item">
                          <i className="bi bi-clock"></i>
                          <span>23 hari</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-calendar-event"></i>
                          <span>Masa Tunggu 5-8 Tahun</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Mekkah: Grand Almassa/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Madinah: Andalus/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-airplane-fill"></i>
                          <span>Saudia Airlines</span>
                        </div>
                      </div>

                      <div className="price-wrapper">
                        <div className="old-price">Rp 31,5 Jt</div>
                        <div className="new-price">
                          Rp 28,5 Jt <span>/orang</span>
                        </div>
                      </div>
                      <div className="btn-pesan">Info selengkapnya</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <NavLink to="/umrah-detail" className="card-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label" id="furoda">
                      Haji Furoda
                    </span>
                    <img src={kabah} alt="Umroh Hemat" />
                  </div>

                  <div className="paket-body">
                    <div>
                      <div className="paket-name">
                        fasilitas bintang 5 - haji khusus masa antri 4 s/d 8
                        tahun{" "}
                      </div>

                      {/* INFO TAMBAHAN */}
                      <div className="paket-info">
                        <div className="info-item">
                          <i className="bi bi-clock"></i>
                          <span>23 hari</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-calendar-event"></i>
                          <span>Masa Tunggu 5-8 Tahun</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Mekkah: Grand Almassa/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Madinah: Andalus/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-airplane-fill"></i>
                          <span>Saudia Airlines</span>
                        </div>
                      </div>

                      <div className="price-wrapper">
                        <div className="old-price">Rp 31,5 Jt</div>
                        <div className="new-price">
                          Rp 28,5 Jt <span>/orang</span>
                        </div>
                      </div>
                      <div className="btn-pesan">Info selengkapnya</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <NavLink to="/umrah-detail" className="card-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label" id="furoda">
                      Haji Furoda
                    </span>
                    <img src={kabah} alt="Umroh Hemat" />
                  </div>

                  <div className="paket-body">
                    <div>
                      <div className="paket-name">
                        fasilitas bintang 5 - haji khusus masa antri 4 s/d 8
                        tahun{" "}
                      </div>

                      {/* INFO TAMBAHAN */}
                      <div className="paket-info">
                        <div className="info-item">
                          <i className="bi bi-clock"></i>
                          <span>23 hari</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-calendar-event"></i>
                          <span>Masa Tunggu 5-8 Tahun</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Mekkah: Grand Almassa/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Madinah: Andalus/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-airplane-fill"></i>
                          <span>Saudia Airlines</span>
                        </div>
                      </div>

                      <div className="price-wrapper">
                        <div className="old-price">Rp 31,5 Jt</div>
                        <div className="new-price">
                          Rp 28,5 Jt <span>/orang</span>
                        </div>
                      </div>
                      <div className="btn-pesan">Info selengkapnya</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <NavLink to="/umrah-detail" className="card-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label" id="furoda">
                      Haji Furoda
                    </span>
                    <img src={kabah} alt="Umroh Hemat" />
                  </div>

                  <div className="paket-body">
                    <div>
                      <div className="paket-name">
                        fasilitas bintang 5 - haji khusus masa antri 4 s/d 8
                        tahun{" "}
                      </div>

                      {/* INFO TAMBAHAN */}
                      <div className="paket-info">
                        <div className="info-item">
                          <i className="bi bi-clock"></i>
                          <span>23 hari</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-calendar-event"></i>
                          <span>Masa Tunggu 5-8 Tahun</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Mekkah: Grand Almassa/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Madinah: Andalus/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-airplane-fill"></i>
                          <span>Saudia Airlines</span>
                        </div>
                      </div>

                      <div className="price-wrapper">
                        <div className="old-price">Rp 31,5 Jt</div>
                        <div className="new-price">
                          Rp 28,5 Jt <span>/orang</span>
                        </div>
                      </div>
                      <div className="btn-pesan">Info selengkapnya</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <NavLink to="/umrah-detail" className="card-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label" id="furoda">
                      Haji Furoda
                    </span>
                    <img src={kabah} alt="Umroh Hemat" />
                  </div>

                  <div className="paket-body">
                    <div>
                      <div className="paket-name">
                        fasilitas bintang 5 - haji khusus masa antri 4 s/d 8
                        tahun{" "}
                      </div>

                      {/* INFO TAMBAHAN */}
                      <div className="paket-info">
                        <div className="info-item">
                          <i className="bi bi-clock"></i>
                          <span>23 hari</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-calendar-event"></i>
                          <span>Masa Tunggu 5-8 Tahun</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Mekkah: Grand Almassa/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Madinah: Andalus/Setaraf</span>
                        </div>
                        <div className="info-item">
                          <i className="bi bi-airplane-fill"></i>
                          <span>Saudia Airlines</span>
                        </div>
                      </div>

                      <div className="price-wrapper">
                        <div className="old-price">Rp 31,5 Jt</div>
                        <div className="new-price">
                          Rp 28,5 Jt <span>/orang</span>
                        </div>
                      </div>
                      <div className="btn-pesan">Info selengkapnya</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* detail haji */}
      {/* ================= HAJI KHUSUS ================= */}
      <section id="haji" className="haji-section">
        <div className="hero">
          <div className="haji-banner text-center">
            <span className="haji-badge">Haji Khusus 2025</span>

            <h2 className="haji-title">
              Program <span>Haji Khusus</span> Aman & Terpercaya
            </h2>

            <p className="haji-desc">
              Wujudkan panggilan suci Anda bersama DTI dengan fasilitas premium,
              hotel dekat Masjidil Haram, dan pembimbing berpengalaman.
            </p>

            {/* HIGHLIGHT PRICE */}
            <div className="haji-price-highlight">
              Hanya <span>Rp 2,5 Juta</span>
            </div>

            <p className="haji-note">
              Biaya pendaftaran awal • Syarat & ketentuan berlaku
            </p>

            <a
              href="https://wa.me/6281389919754"
              target="_blank"
              rel="noreferrer"
              className="haji-btn"
            >
              <i className="bi bi-whatsapp me-2"></i>
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="testimoni-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="testi-title">Testimoni Jamaah Umroh</h2>
            <p className="testi-sub">
              Apa kata mereka yang sudah berangkat bersama DTI
            </p>
          </div>

          <div className="row g-4">
            {/* TESTIMONI 1 */}
            <div className="col-lg-6">
              <div className="testi-card">
                <div className="testi-header">
                  <div className="avatar">T</div>

                  <div>
                    <div className="name">Titi Sutikno</div>
                    <div className="city">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                        alt="Google"
                        className="google-logo"
                      />
                      2 bulan lalu
                    </div>
                  </div>
                </div>

                <div className="stars">★★★★★</div>

                <p>
                  “Alhamdulillah perjalanan umroh bersama keluarga berjalan
                  lancar dan sangat memuaskan. Hotel dekat masjid, makanan
                  terjamin, pembimbing sabar dan profesional. Bahkan diberikan
                  perhatian ekstra untuk menjaga stamina jamaah.”
                </p>
              </div>
            </div>

            {/* TESTIMONI 2 */}
            <div className="col-lg-6">
              <div className="testi-card">
                <div className="testi-header">
                  <div className="avatar">A</div>

                  <div>
                    <div className="name">Aisyah Rahma</div>
                    <div className="city">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                        alt="Google"
                        className="google-logo"
                      />
                      1 bulan lalu
                    </div>
                  </div>
                </div>

                <div className="stars">★★★★★</div>

                <p>
                  “Such a memorable umroh journey with DTI. Awalnya takut
                  berangkat sendiri, tapi selalu ditemani dan dibimbing dengan
                  sabar. Ibadah terasa nyaman, aman, dan penuh makna.”
                </p>
              </div>
            </div>
            {/* TESTIMONI 2 */}
            <div className="col-lg-6">
              <div className="testi-card">
                <div className="testi-header">
                  <div className="avatar">A</div>

                  <div>
                    <div className="name">Aisyah Rahma</div>
                    <div className="city">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                        alt="Google"
                        className="google-logo"
                      />
                      1 bulan lalu
                    </div>
                  </div>
                </div>

                <div className="stars">★★★★★</div>

                <p>
                  “Such a memorable umroh journey with DTI. Awalnya takut
                  berangkat sendiri, tapi selalu ditemani dan dibimbing dengan
                  sabar. Ibadah terasa nyaman, aman, dan penuh makna.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Haji;
