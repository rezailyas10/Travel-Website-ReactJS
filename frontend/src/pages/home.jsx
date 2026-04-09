import React from "react";
import slide1 from "../assets/carousel/slide 1.png";
import slide2 from "../assets/carousel/slide 2.png";
import slide3 from "../assets/carousel/slide 3.png";
import { NavLink, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import google from "../assets/google.png";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div
          id="heroSlider"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slide1}
                className="d-block w-100 hero-img"
                alt="Slide 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src={slide2}
                className="d-block w-100 hero-img"
                alt="Slide 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src={slide3}
                className="d-block w-100 hero-img"
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Navigation */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroSlider"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroSlider"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="layanan-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle">
              Pelayanan terbaik untuk memastikan ibadah Anda nyaman dan khusyuk.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="layanan-card">
                <div className="layanan-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h5>Akomodasi</h5>
                <p>
                  Menginap di hotel nyaman dan strategis dekat area suci agar
                  ibadah lebih maksimal tanpa banyak waktu terbuang.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="layanan-card">
                <div className="layanan-icon">
                  <i className="bi bi-bus-front-fill"></i>
                </div>
                <h5>Transportasi</h5>
                <p>
                  Transportasi aman dan nyaman untuk antar-jemput bandara,
                  hotel, hingga lokasi suci tanpa ribet.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="layanan-card">
                <div className="layanan-icon">
                  <i className="bi bi-person-check-fill"></i>
                </div>
                <h5>Pendampingan Ibadah</h5>
                <p>
                  Didampingi pembimbing berpengalaman dalam setiap rangkaian
                  ritual Umrah dan pembinaan spiritual.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="layanan-card">
                <div className="layanan-icon">
                  <i className="bi bi-file-earmark-text-fill"></i>
                </div>
                <h5>Pengurusan Visa</h5>
                <p>
                  Proses visa lebih mudah dengan bantuan tim profesional dari
                  awal hingga selesai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALASAN */}
      <section id="alasan" className="alasan-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Kenapa Memilih DTI?</h2>
            <p className="alasan-subtitle">
              Kami hadir untuk memberikan pengalaman ibadah yang aman, nyaman,
              dan penuh makna.
            </p>
          </div>

          <div className="alasan-wrapper">
            {/* Item 1 */}
            <div className="alasan-item">
              <div className="alasan-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="alasan-content">
                <h5>Berpengalaman Sejak 2014</h5>
                <p>
                  Telah mendampingi ribuan jamaah menuju Tanah Suci dengan
                  pelayanan profesional dan penuh ketenangan.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="alasan-item">
              <div className="alasan-icon">
                <i className="bi bi-award"></i>
              </div>
              <div className="alasan-content">
                <h5>Berizin Resmi Kementrian</h5>
                <p>
                  Terdaftar resmi sebagai penyelenggara PPIU/PIHK dengan standar
                  audit dan keamanan terpercaya.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="alasan-item">
              <div className="alasan-icon">
                <i className="bi bi-people"></i>
              </div>
              <div className="alasan-content">
                <h5>Simple & Comfortable</h5>
                <p>
                  Program fleksibel dengan pilihan hotel dan rute yang nyaman
                  untuk semua kalangan usia.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-5">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="btn-konsultasi"
            >
              <i className="bi bi-whatsapp me-2"></i>
              Konsultasi Gratis Sekarang
            </a>
          </div>
        </div>
      </section>
      <section id="paket" className=" mb-1">
        <div className="container">
          {/* ================= PAKET REGULER ================= */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="section-title" id="paket-umrah">
              Paket Umroh Reguler
            </div>
            <Link
              to="/umrah#paket"
              className="text-decoration-none"
              style={{
                color: "var(--blue)",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              Lihat Semua <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row g-3">
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-lg-3 ">
              <NavLink to="/umrah-detail" className="paket-link">
                <div className="paket-card">
                  <div className="img-wrap">
                    <span className="badge-label">Promo</span>
                    <img
                      src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80"
                      alt="Umroh Hemat"
                    />
                  </div>

                  <div className="paket-body">
                    <div className="paket-name">Paket Umroh Hemat 9 Hari</div>
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
                    <img
                      src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80"
                      alt="Umroh Hemat"
                    />
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
          </div>
        </div>
      </section>

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
              href="https://wa.me/6281370907919"
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
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-sub">Pertanyaan yang sering ditanyakan jamaah</p>
          </div>

          <div className="accordion faq-accordion" id="faqAccordion">
            {/* ITEM 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  Kapan waktu terbaik untuk melaksanakan Umrah?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Umrah dapat dilakukan sepanjang tahun. Banyak jamaah
                  menghindari musim puncak seperti masa Haji dan Ramadan karena
                  sangat padat. Bulan Rajab, Syaban, dan Muharram sering menjadi
                  pilihan karena cuacanya lebih nyaman dan jumlah jamaah lebih
                  moderat.
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Dokumen apa saja yang diperlukan untuk VISA Umrah?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Dokumen utama meliputi paspor berlaku minimal 6 bulan,
                  formulir permohonan visa, foto latar putih, bukti vaksinasi
                  sesuai ketentuan terbaru, serta bukti hubungan keluarga jika
                  bepergian bersama. Tim kami akan membantu prosesnya secara
                  lengkap.
                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Seberapa jauh hari sebaiknya memesan paket Umrah?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Disarankan memesan minimal 2–3 bulan sebelum keberangkatan.
                  Untuk periode ramai seperti Ramadan atau libur sekolah,
                  sebaiknya 4–6 bulan sebelumnya agar pilihan hotel dan tiket
                  masih tersedia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
