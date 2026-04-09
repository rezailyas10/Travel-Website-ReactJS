import React from "react";
import "../css/umrah.css";
import kabah from "../assets/kabah.jpg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import google from "../assets/google.png";
import "swiper/css";
import "swiper/css/pagination";

const Umrah = () => {
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
            <h1>
              Nikmati Perjalanan Ibadah Umroh Hemat Aman dan Nyaman Bersama{" "}
              <em>DTI </em>
            </h1>
            <p>
              Konsultasikan rencana perjalanan ibadan umroh dan haji Anda di
              kantor DTI terdekat.
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
            <div className="section-title text-center w-100">Paket Umrah</div>
          </div>

          <div className="row g-3">
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-lg-3 ">
              <NavLink to="/umrah-detail" className="paket-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label">Promo</span>
                    <img src={kabah} alt="Umroh Hemat" />
                  </div>

                  <div className="paket-body">
                    <div className="paket-name">
                      Paket Umroh Hemat 9 Hari dan bonus penginapan
                    </div>
                    <div>
                      {/* INFO TAMBAHAN */}
                      <div
                        className="paket-info"
                        style={{
                          marginBottom: "14px",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "6px 12px",
                        }}
                      >
                        <div className="info-item">
                          <i className="bi bi-airplane-fill"></i>
                          <span>Saudia Airlines</span>
                        </div>

                        <div className="info-item">
                          <i className="bi bi-calendar-event"></i>
                          <span>12 Oktober 2025</span>
                        </div>

                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Mekkah: Grand Almassa/Setaraf</span>
                        </div>

                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Madinah: Andalus/Setaraf</span>
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
            <div className="col-12 col-sm-6 col-lg-3 ">
              <NavLink to="/umrah-detail" className="paket-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label">Promo</span>
                    <img src={kabah} alt="Umroh Hemat" />
                  </div>

                  <div className="paket-body">
                    <div className="paket-name">
                      Paket Umroh Hemat 9 Hari dan bonus penginapan dan
                      fasilitas lainnya
                    </div>
                    <div>
                      {/* INFO TAMBAHAN */}
                      <div
                        className="paket-info"
                        style={{
                          marginBottom: "14px",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "6px 12px",
                        }}
                      >
                        <div className="info-item">
                          <i className="bi bi-airplane-fill"></i>
                          <span>Saudia Airlines</span>
                        </div>

                        <div className="info-item">
                          <i className="bi bi-calendar-event"></i>
                          <span>12 Oktober 2025</span>
                        </div>

                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Mekkah: Grand Almassa/Setaraf</span>
                        </div>

                        <div className="info-item">
                          <i className="bi bi-building"></i>
                          <span>Madinah: Andalus/Setaraf</span>
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

      {/* TESTIMONI */}
      <section id="testimoni" className="testimoni-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Testimoni Jamaah Umroh</h2>
            <p className="testi-sub">
              Apa kata mereka yang sudah berangkat bersama DTI
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            autoHeight={false}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {/* TESTIMONI 1 */}
            <SwiperSlide>
              <div className="testi-card">
                <div className="testi-header">
                  <div className="avatar">T</div>

                  <div>
                    <div className="name">Titi Sutikno</div>
                    <div className="city">2 bulan lalu</div>
                  </div>
                </div>

                <div className="stars">★★★★★</div>

                <p>
                  “Alhamdulillah perjalanan umroh bersama keluarga berjalan
                  lancar dan sangat memuaskan. Hotel dekat masjid, makanan
                  terjamin, pembimbing sabar dan profesional.” “Alhamdulillah
                  perjalanan umroh bersama keluarga berjalan lancar dan sangat
                  memuaskan. Hotel dekat masjid, makanan terjamin, pembimbing
                  sabar dan profesional.”
                </p>

                <div className="google-review">
                  <img src={google} alt="Google" className="google-logo" />
                </div>
              </div>
            </SwiperSlide>

            {/* TESTIMONI 2 */}
            <SwiperSlide>
              <div className="testi-card">
                <div className="testi-header">
                  <div className="avatar">A</div>

                  <div>
                    <div className="name">Aisyah Rahma</div>
                    <div className="city">1 bulan lalu</div>
                  </div>
                </div>

                <div className="stars">★★★★★</div>

                <p>
                  “Such a memorable umroh journey with DTI. Awalnya takut
                  berangkat sendiri, tapi selalu ditemani dan dibimbing dengan
                  sabar. Ibadah terasa nyaman, aman, dan penuh makna.”
                </p>
                <div className="google-review">
                  <img src={google} alt="Google" className="google-logo" />
                </div>
              </div>
            </SwiperSlide>

            {/* TESTIMONI 3 */}
            <SwiperSlide>
              <div className="testi-card">
                <div className="testi-header">
                  <div className="avatar">R</div>

                  <div>
                    <div className="name">Rahmat Hidayat</div>
                    <div className="city">3 minggu lalu</div>
                  </div>
                </div>

                <div className="stars">★★★★★</div>

                <p>
                  “Pelayanan DTI luar biasa. Semua kebutuhan jamaah diperhatikan
                  dengan baik. Dari keberangkatan sampai pulang semuanya
                  terorganisir dengan rapi.”
                </p>
                <div className="google-review">
                  <img src={google} alt="Google" className="google-logo" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="haji" className="haji-section">
        <div className="hero">
          {/* BOOKING INFO */}
          <div className="booking-info text-center mt-2">
            <h3 className="booking-title">
              Booking Seat Umroh Sobat Sebelum Kehabisan
            </h3>

            <p className="booking-desc">
              Konsultasikan kebutuhan perjalanan umroh dan wisata dengan tim
              ahli kami. Dapatkan penawaran terbaik dan bonus melimpah untuk
              pengalaman ibadah yang tak terlupakan.
            </p>

            <div className="booking-items">
              <div className="booking-item">
                <i className="bi bi-headset"></i>
                <h6>Konsultasi Langsung</h6>
                <p>Tim expert siap membantu</p>
              </div>

              <div className="booking-item">
                <i className="bi bi-whatsapp"></i>
                <h6>Chat WhatsApp</h6>
                <p>Respon cepat dan informatif</p>
              </div>

              <div className="booking-item">
                <i className="bi bi-building"></i>
                <h6>Kunjungi Kantor</h6>
                <p>Bertemu langsung dengan tim kami</p>
              </div>
            </div>
            <a
              href="https://wa.me/6281234567890"
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
    </>
  );
};

export default Umrah;
