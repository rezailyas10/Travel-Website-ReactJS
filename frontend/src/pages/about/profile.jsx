import React, { useRef, useState } from "react";
import "../../css/profile.css";
import bsi from "../../assets/klien/bank-bsi-logo.png";
import sta from "../../assets/klien/sta.jpg";
import siskopatuh from "../../assets/klien/siskopatuh.jpg";
import kabah from "../../assets/kabah.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Profile() {
  return (
    <>
      <section className="blog-section">
        <div className="blog-container">
          {/* Hero Text */}
          <h1>Profil DTI</h1>
          <p>Selamat Datang di website Digital Travel Indonesia</p>
        </div>
      </section>

      {/* PROFIL */}
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
              DTI <br />
              <em>Digital Travel Indonesia</em>
            </h1>
            <p>
              DTI adalah penyelenggara Umroh & Haji Khusus resmi yang berlokasi
              di BSD, Tangerang Selatan. Berdiri sejak 09 Januari 2013, DTI
              telah dipercaya oleh jamaah dari seluruh Indonesia selama lebih
              dari satu dekade dalam melayani perjalanan ibadah ke Tanah Suci
              secara aman, profesional, dan terpercaya. Kami telah melayani
              puluhan ribu jamaah dari berbagai daerah Indonesia. mulai dari
              Jakarta, Depok, Bekasi, bahkan hingga Sulawesi & Papua. Dengan
              izin resmi dari Kementerian Agama Republik Indonesia serta
              akreditasi A (unggul), DTI siap mendampingi langkah ibadah Sobat
              Hana menuju Baitullah.
            </p>
          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="visi-misi">
        <div className="container">
          <div className="row g-4">
            {/* VISI */}
            <div className="col-md-6">
              <div className="vm-card visi">
                <div className="vm-icon">
                  <i className="bi bi-eye-fill"></i>
                </div>

                <h4>Visi</h4>

                <p>
                  Menjadi travel Umrah dan Haji terpercaya yang memberikan
                  pelayanan profesional dan membantu umat muslim menjalankan
                  ibadah ke Tanah Suci dengan nyaman.
                </p>
              </div>
            </div>

            {/* MISI */}
            <div className="col-md-6">
              <div className="vm-card misi">
                <div className="vm-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>

                <h4>Misi</h4>

                <ul>
                  <li>Memberikan pelayanan terbaik kepada jamaah</li>
                  <li>Harga transparan dan terpercaya</li>
                  <li>Memberikan kenyamanan selama perjalanan ibadah</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGALITAS */}
      <section className="legalitas">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">Legalitas & Kredibilitas</h3>

          <div className="row justify-content-center g-5">
            {/* BOX IZIN */}
            <div className="col-md-5">
              <div className="legal-card">
                <h4 className="legal-title">Nomor Izin Umroh & Haji</h4>

                <div className="legal-item">
                  <i className="bi bi-file-earmark-text"></i>
                  <span>Izin Umroh: 912030022163600030</span>
                </div>

                <div className="legal-item">
                  <i className="bi bi-file-earmark-text"></i>
                  <span>Izin Haji Khusus: 91203002216360002</span>
                </div>
              </div>
            </div>

            {/* BOX AFILIASI */}
            <div className="col-md-5">
              <div className="legal-card">
                <h4 className="legal-title">Afiliasi Resmi</h4>

                <ul className="afiliasi-list">
                  <li>
                    <i className="bi bi-check-square"></i> Kemenag RI
                  </li>
                  <li>
                    <i className="bi bi-check-square"></i> SISKOPATUH
                  </li>
                  <li>
                    <i className="bi bi-check-square"></i> Ekualindo
                  </li>
                  <li>
                    <i className="bi bi-check-square"></i> IATA
                  </li>
                  <li>
                    <i className="bi bi-check-square"></i> KAN
                  </li>
                  <li>
                    <i className="bi bi-check-square"></i> Aspirasi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIM */}
      <section className="team-section">
        <div className="container text-center">
          <h3 className="fw-bold mb-4 text-white">Tim Customer Service</h3>
          <p className="text-white mb-5 ">
            Tim profesional yang siap membantu perjalanan ibadah Anda
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="team-card">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                />

                <h6>CS Gita</h6>
                <p>Customer Service</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-card">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />

                <h6>CS Ratu</h6>
                <p>Customer Service</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-card">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt=""
                />

                <h6>CS Mia</h6>
                <p>Customer Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="partner-section">
        <div className="container text-center">
          <h3 className="section-title fw-bold mb-3">Partner & Maskapai</h3>

          <p className="text-muted mb-5">
            Kami bekerja sama dengan berbagai maskapai dan partner terpercaya
            untuk memberikan pelayanan terbaik bagi jamaah haji dan umrah.
          </p>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            <SwiperSlide>
              <img src={bsi} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={sta} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={siskopatuh} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={bsi} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={sta} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={siskopatuh} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={bsi} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={sta} className="partner-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={siskopatuh} className="partner-logo" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Profile;
