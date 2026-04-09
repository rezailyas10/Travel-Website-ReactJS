import React, { useState, useEffect } from "react";
import "../../css/detail.css";

import axios from "axios";

import html2pdf from "html2pdf.js";

import BrosurPDF from "../detail/pdf";

async function downloadPDF() {
  const element = document.getElementById("brosurPDF");

  const images = element.querySelectorAll("img");
  await Promise.all(
    Array.from(images).map(
      (img) =>
        // buat gambar bisa masuk pdf
        new Promise((resolve) => {
          if (img.complete && img.naturalWidth !== 0) {
            try {
              const canvas = document.createElement("canvas");
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
              canvas.getContext("2d").drawImage(img, 0, 0);
              img.src = canvas.toDataURL("image/png");
            } catch (_) {}
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        }),
    ),
  );

  const opt = {
    margin: 1,
    filename: "Brosur_Umroh_DTI.pdf",
    image: { type: "jpeg", quality: 1 }, // ← jpeg + quality 85% cukup tajam, file kecil
    html2canvas: {
      scale: 3, // ← scale 3 sudah cukup tajam, tidak 100mb
      useCORS: true,
      allowTaint: true,
      windowWidth: element.scrollWidth,
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["css", "legacy"], // ← hormat page-break CSS
    },
  };

  html2pdf().set(opt).from(element).save();
}

const Detail = () => {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [hotel, setHotel] = useState("5");
  const [cart, setCart] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // langsung tanpa animasi
    });
  }, []);

  const fmt = (n) => "IDR " + n.toLocaleString("id-ID");

  const roomPrices = {
    5: [
      { name: "QUAD (4 PAX)", sub: "4 orang / kamar", price: 14900000 },
      { name: "TRIPLE (3 PAX)", sub: "3 orang / kamar", price: 16900000 },
      { name: "DOUBLE (2 PAX)", sub: "2 orang / kamar", price: 19900000 },
    ],
    3: [
      { name: "QUAD (4 PAX)", sub: "4 orang / kamar", price: 12900000 },
      { name: "TRIPLE (3 PAX)", sub: "3 orang / kamar", price: 13900000 },
      { name: "DOUBLE (2 PAX)", sub: "2 orang / kamar", price: 15900000 },
    ],
  };

  const rooms = roomPrices[hotel];

  // ================= INFANT & CHILD =================
  const [infant, setInfant] = useState(0);
  const [child, setChild] = useState(0);

  const INFANT_PRICE = 11000000;
  const CHILD_DISCOUNT = 3000000;

  // hitung keranjang
  // const cartTotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const cartTotal = cart.reduce((total, item) => {
    return (
      total +
      item.price * item.qty +
      item.child * (item.price - CHILD_DISCOUNT) +
      item.infant * INFANT_PRICE
    );
  }, 0);

  const [paymentType, setPaymentType] = useState("lunas");
  const [showSkema, setShowSkema] = useState(false);

  const DP = 5000000;

  // const finalTotal = paymentType === "dp" ? DP : cartTotal;

  // const pelunasan = cartTotal - DP;

  const finalTotal = paymentType === "dp" ? DP : cartTotal;

  const pelunasan = cartTotal - DP;

  // hapus item dari keranjang
  // const removeCart = (index) => {
  //   const newCart = [...cart];
  //   newCart.splice(index, 1);
  //   setCart(newCart);
  // };

  const removeAdult = (index) => {
    const newCart = [...cart];

    newCart[index].qty = 0;

    if (
      newCart[index].qty === 0 &&
      newCart[index].child === 0 &&
      newCart[index].infant === 0
    ) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  const removeChild = (index) => {
    const newCart = [...cart];

    newCart[index].child = 0;

    if (
      newCart[index].qty === 0 &&
      newCart[index].child === 0 &&
      newCart[index].infant === 0
    ) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  const removeInfant = (index) => {
    const newCart = [...cart];

    newCart[index].infant = 0;

    if (
      newCart[index].qty === 0 &&
      newCart[index].child === 0 &&
      newCart[index].infant === 0
    ) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };
  const createInvoice = async () => {
    try {
      const res = await axios.post("http://localhost:5000/create-invoice", {
        amount: finalTotal, // total harga dari frontend
        name: "Paket Umroh Ramadhan", // bisa diganti sesuai input user
        email: "jamaah@email.com", // bisa ambil dari form
        qty: qty, // jumlah orang
      });

      // Ambil URL invoice dari response backend
      const invoiceUrl = res.data.invoice_url;

      // Redirect user ke halaman pembayaran Xendit
      window.open(invoiceUrl, "_blank");
    } catch (err) {
      console.log("Error create invoice:", err.response?.data || err);
      alert("Gagal membuat invoice. Cek console untuk detail.");
    }
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* ================= LEFT CONTENT ================= */}
        <div className="col-lg-8">
          <img
            src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&q=80"
            className="hero-img mb-3"
            alt="Masjidil Haram"
          />

          <span className="badge-date">
            <i className="fas fa-calendar-alt me-1"></i>
            23 Agt — 31 Agt 2026
          </span>

          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 6 }}>
            Umroh Spesial Pelataran Mekkah – 9 Hari
          </h1>

          <p className="text-muted" style={{ fontSize: "0.88rem" }}>
            Berangkat dari Jakarta · Qatar Airways / Ittihad Airways
          </p>

          {/* BADGES */}
          <div className="d-flex flex-wrap gap-2 my-3">
            <span className="badge rounded-pill bg-light text-dark border">
              <i className="fas fa-suitcase-rolling me-1 text-warning"></i>
              Bagasi 25kg
            </span>
            <span className="badge rounded-pill bg-light text-dark border">
              <i className="fas fa-hotel me-1 text-warning"></i>
              Hotel Bintang 5
            </span>
            <span className="badge rounded-pill bg-light text-dark border">
              <i className="fas fa-train me-1 text-warning"></i>
              Kereta Cepat
            </span>
            <span className="badge rounded-pill bg-light text-dark border">
              <i className="fas fa-shield-alt me-1 text-warning"></i>
              Asuransi
            </span>
            <span className="badge rounded-pill bg-light text-dark border">
              <i className="fas fa-utensils me-1 text-warning"></i>
              Full Board Madinah
            </span>
            <span className="badge rounded-pill bg-light text-dark border">
              <i className="fas fa-tint me-1 text-warning"></i>
              Air Zam-Zam 5L
            </span>
          </div>

          {/* ================= FASILITAS ================= */}
          <div className="card p-4 mb-4">
            <div className="row g-4">
              {/* INCLUDED */}
              <div className="col-md-6">
                <h5 className="section-title text-success">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Sudah Termasuk
                </h5>

                <ul className="feature-list included">
                  <li>Transportasi selama perjalanan</li>
                  <li>Penerbangan internasional</li>
                  <li>Free Air Zam-Zam 5L/orang</li>
                  <li>Breakfast Only Hotel Mekkah</li>
                  <li>Visa, Asuransi & Siskopatuh</li>
                  <li>Tiket Kereta Cepat</li>
                  <li>Kain Ihram (Laki-laki)</li>
                  <li>Full Board Meals Madinah</li>
                  <li>Airport Handling</li>
                  <li>ID Card & Buku Panduan</li>
                  <li>Hotel Madinah & Mekkah</li>
                </ul>
              </div>

              {/* EXCLUDED */}
              <div className="col-md-6">
                <h5 className="section-title text-danger">
                  <i className="bi bi-x-circle-fill me-2"></i>
                  Tidak Termasuk
                </h5>

                <ul className="feature-list excluded">
                  <li>Perlengkapan ibadah pribadi</li>
                  <li>Lunch & Dinner Hotel Mekkah</li>
                  <li>Vaksin</li>
                </ul>

                <div className="extra-box mt-3">
                  <strong>Biaya Tambahan:</strong>
                  <br />
                  Infant (&lt;2 thn): IDR 11.000.000
                  <br />
                  Child (2–7 thn) no bed Diskon IDR 3.000.000
                </div>
              </div>
            </div>
          </div>

          {/* ================= ITINERARY ================= */}
          <div className="card p-4 mb-4">
            <h5 className="section-title mb-4">
              <i className="bi bi-calendar-week me-2"></i>
              Program Perjalanan
            </h5>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-day">Day 1</div>
                <div>
                  <h6>Jakarta – Meeting Point</h6>
                  <p>
                    Kumpul di Bandara Soekarno-Hatta 4 jam sebelum flight.
                    Transit Doha / Abu Dhabi.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 2</div>
                <div>
                  <h6>Landing Jeddah – Tiba Madinah</h6>
                  <p>
                    Landing Jeddah, perjalanan menuju Madinah, check-in hotel.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 3</div>
                <div>
                  <h6>Madinah Al Munawwarah</h6>
                  <p>Walking tour Masjid Nabawi & ziarah Madinah.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 4</div>
                <div>
                  <h6>Madinah City Tour</h6>
                  <p>
                    Jabal Uhud, Masjid Quba, belanja kurma. Manzil umroh kedua.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 5</div>
                <div>
                  <h6>Madinah – Mekkah</h6>
                  <p>Naik Kereta Cepat ke Mekkah, check-in hotel, UMROH.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 6</div>
                <div>
                  <h6>Mekkah Al Mukarramah</h6>
                  <p>Free time ibadah mandiri di Masjidil Haram.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 7</div>
                <div>
                  <h6>Mekkah City Tour</h6>
                  <p>
                    Jabal Rahmah, Arafah, Mina, Jabal Nur. Kesempatan umroh
                    kedua.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 8</div>
                <div>
                  <h6>Mekkah – Jeddah – Pulang</h6>
                  <p>
                    Check-out ke Bandara King Abdul Aziz, flight ke Jakarta.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-day">Day 9</div>
                <div>
                  <h6>Tiba Jakarta</h6>
                  <p>Mendarat di Terminal 3 Bandara Soekarno-Hatta.</p>
                </div>
              </div>
            </div>

            <div className="note-box mt-3">
              <i className="bi bi-info-circle me-1"></i>
              Urutan jadwal dapat berubah menyesuaikan kondisi di lapangan.
            </div>
          </div>

          {/* ================= SYARAT DOKUMEN ================= */}
          <div className="card p-4 mb-4">
            <h5 className="section-title mb-3">
              <i className="bi bi-file-earmark-text me-2"></i>
              Syarat Visa
            </h5>

            <ul className="feature-list included">
              <li>Paspor dengan masa berlaku minimal 6 bulan</li>
              <li>Formulir aplikasi visa yang lengkap</li>
              <li>Foto ukuran 4x6 cm terbaru</li>
              <li>Biaya visa sesuai ketentuan</li>
              <li>
                Dokumen pendukung lain sesuai permintaan Kedutaan / Konsulat
              </li>
            </ul>
          </div>

          {/* ================= SYARAT & KETENTUAN ================= */}
          <div className="card p-4 mb-4">
            <h5 className="section-title mb-3">
              <i className="bi bi-file-text me-2"></i>
              Syarat & Ketentuan
            </h5>

            <p className="terms-intro">
              Peserta umroh dianggap telah membaca, mengerti dan menerima
              kondisi sebagai berikut:
            </p>

            <h6 className="terms-sub">Ketentuan Umum</h6>
            <ol className="terms-list">
              <li>
                Seluruh peserta wajib mematuhi ketentuan yang telah ditetapkan
                oleh DTI (Digital Travel Indonesia).
              </li>
              <li>
                Program Umroh ini tidak menggunakan seragam batik & koper group.
              </li>
              <li>
                Peserta dengan usia diatas 55 tahun wajib dengan pendamping.
              </li>
              <li>
                Peserta akan tunduk terhadap perubahan aturan dari Pemerintah
                Saudi Arabia, Pemerintah Indonesia dan Maskapai.
              </li>
              <li>
                DTI berhak membatalkan perjalanan jika peserta tidak mematuhi
                ketentuan yang berlaku.
              </li>
              <li>
                Peserta dianggap mengundurkan diri apabila tidak mematuhi skema
                pembayaran yang telah ditentukan.
              </li>
              <li>
                Jadwal keberangkatan dapat berubah sewaktu-waktu menyesuaikan
                ketersediaan seat maskapai.
              </li>
              <li>
                Apabila kurs USD terhadap IDR melebihi 17.500 maka akan ada
                penyesuaian harga.
              </li>
            </ol>

            <h6 className="terms-sub">Pendaftaran & Uang Muka</h6>
            <p className="terms-text">
              Peserta wajib membayar Down Payment (DP) sesuai nominal yang telah
              ditentukan. Pelunasan paling lambat 45 hari sebelum tanggal
              keberangkatan.
            </p>

            <h6 className="terms-sub">Pembatalan / Perubahan</h6>
            <p className="terms-text">
              Selama tiket belum issued (H-30), peserta diperkenankan melakukan
              reschedule atau perubahan jadwal dengan biaya administrasi
              Rp1.000.000 per peserta.
            </p>
          </div>

          {/* ================= REVIEWS ================= */}
          <div className="card-title-custom" style={{ fontWeight: 800 }}>
            💬 Ulasan Jamaah
          </div>

          <div className="row g-3 mb-4">
            <div className="col-sm-4">
              <div className="review-card">
                <strong>Arsono</strong>
                <p>Travel umroh terbaik. Tidak padat, fokus ibadah.</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="review-card">
                <strong>Titi Sutikno</strong>
                <p>Perjalanan lancar bersama keluarga.</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="review-card">
                <strong>Fairuz Nisa</strong>
                <p>Pengalaman berkesan. Aman dan nyaman.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT BOOKING CARD ================= */}
        <div className="col-lg-4">
          {/* DOWNLOAD BROSUR */}
          <button className="brochure-box mb-3" onClick={downloadPDF}>
            <div className="brochure-left">
              <i className="bi bi-file-earmark-pdf"></i>
              <div>
                <div className="brochure-title">Download Brosur</div>
                <div className="brochure-sub">Paket Umrah PDF</div>
              </div>
            </div>

            <span className="brochure-btn">
              <i className="bi bi-download"></i>
            </span>
          </button>

          {/* komponen brosur tapi disembunyikan */}
          <div style={{ position: "absolute", left: "-9999px" }}>
            <BrosurPDF />
          </div>
          <div className="card booking-card p-4 shadow-sm">
            <h5 className="mb-3 fw-bold">Pilih Tipe Kamar</h5>

            {Object.entries(roomPrices).map(([hotelStar, rooms]) => (
              <div key={hotelStar} className="hotel-group">
                <div className="hotel-title">Hotel ★{hotelStar}</div>

                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className={`room-option ${
                      price === room.price ? "active" : ""
                    }`}
                    onClick={() => {
                      setHotel(hotelStar);
                      setPrice(room.price);
                    }}
                  >
                    <div className="room-left">
                      <div className="room-name">{room.name}</div>
                      <div className="room-sub">{room.sub}</div>
                    </div>

                    <div className="room-right">
                      <div className="room-price">
                        {room.price.toLocaleString("id-ID")}
                      </div>
                      <div className="room-per">/ orang</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* QTY adult */}
            <div className="qty-section mt-2">
              <span>Jumlah Peserta</span>

              <div className="qty-wrap">
                <button onClick={() => qty > 0 && setQty(qty - 1)}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            {/* ================= INFANT ================= */}
            <div className="qty-section mt-3">
              <span>Infant (&lt;2 tahun)</span>

              <div className="qty-wrap">
                <button onClick={() => infant > 0 && setInfant(infant - 1)}>
                  −
                </button>
                <span>{infant}</span>
                <button onClick={() => setInfant(infant + 1)}>+</button>
              </div>
            </div>

            {/* ================= CHILD ================= */}
            <div className="qty-section mt-3">
              <span>Child no bed (2–7 tahun)</span>

              <div className="qty-wrap">
                <button onClick={() => child > 0 && setChild(child - 1)}>
                  −
                </button>
                <span>{child}</span>
                <button onClick={() => setChild(child + 1)}>+</button>
              </div>
            </div>

            {/* BUTTON TAMBAH */}
            <button
              className="btn-cart-main mt-3 mb-2"
              onClick={() => {
                setCart([
                  ...cart,
                  {
                    hotel,
                    roomName: rooms.find((r) => r.price === price)?.name,
                    price,
                    qty,
                    child,
                    infant,
                  },
                ]);

                setQty(0); // reset qty
                setChild(0); //reset child
                setInfant(0); //reset infant
              }}
            >
              Tambah ke Keranjang
            </button>
            {/* CART */}
            {/* ADULT */}
            {cart.some((item) => item.qty > 0) && (
              <>
                <div className="cart-group-title">Adult</div>

                {cart.map(
                  (item, i) =>
                    item.qty > 0 && (
                      <div key={"adult" + i} className="cart-item mt-2">
                        <div className="cart-left">
                          <div className="cart-hotel">Hotel ★{item.hotel}</div>
                          <div className="cart-room">{item.roomName}</div>
                          <div className="cart-pax">{item.qty} Adult</div>
                        </div>

                        <div className="cart-right">
                          <div className="cart-price">
                            {fmt(item.price * item.qty)}
                          </div>

                          <button
                            className="cart-remove"
                            onClick={() => removeAdult(i)}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ),
                )}
              </>
            )}

            {/* CHILD */}
            {cart.some((item) => item.child > 0) && (
              <>
                <div className="cart-group-title mt-3">Child</div>

                {cart.map(
                  (item, i) =>
                    item.child > 0 && (
                      <div key={"child" + i} className="cart-item mt-2">
                        <div className="cart-left">
                          <div className="cart-hotel">Hotel ★{item.hotel}</div>
                          <div className="cart-room">{item.roomName}</div>
                          <div className="cart-pax">
                            {item.child} Child (No Bed)
                          </div>
                        </div>

                        <div className="cart-right">
                          <div className="cart-price">
                            {fmt(item.child * (item.price - CHILD_DISCOUNT))}
                          </div>

                          <button
                            className="cart-remove"
                            onClick={() => removeChild(i)}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ),
                )}
              </>
            )}

            {/* INFANT */}
            {cart.some((item) => item.infant > 0) && (
              <>
                <div className="cart-group-title mt-3">Infant</div>

                {cart.map(
                  (item, i) =>
                    item.infant > 0 && (
                      <div key={"infant" + i} className="cart-item mt-2">
                        <div className="cart-left">
                          <div className="cart-hotel">Hotel ★{item.hotel}</div>
                          <div className="cart-room">{item.roomName}</div>
                          <div className="cart-pax">{item.infant} Infant</div>
                        </div>

                        <div className="cart-right">
                          <div className="cart-price">
                            {fmt(item.infant * INFANT_PRICE)}
                          </div>

                          <button
                            className="cart-remove"
                            onClick={() => removeInfant(i)}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ),
                )}
              </>
            )}

            {/* BUTTON SKEMA PAYMENT */}
            <div className="d-grid gap-2 mt-4">
              <button
                className={`btn-book-main ${paymentType === "lunas" ? "active-pay" : ""}`}
                onClick={() => setPaymentType("lunas")}
              >
                Bayar Lunas
              </button>

              <button
                className={`btn-dp ${paymentType === "dp" ? "active-pay" : ""}`}
                onClick={() => setPaymentType("dp")}
              >
                Bayar Uang Muka
              </button>
            </div>

            <div
              className="payment-link"
              onClick={() => setShowSkema(!showSkema)}
            >
              Lihat Skema Pembayaran
            </div>

            {showSkema && (
              <div className="payment-popup">
                <div className="skema-item">
                  <div>{cartTotal === 0 ? "IDR 0" : fmt(5000000)}</div>
                  <span>DP ke 1</span>
                </div>

                <div className="skema-item">
                  <div>{cartTotal === 0 ? "IDR 0" : fmt(pelunasan)}</div>
                  <span>Pelunasan H-45 sebelum keberangkatan</span>
                </div>

                <div className="skema-note">
                  Note: Reminder akan dikirim ke email peserta
                </div>
              </div>
            )}

            {/* TOTAL */}
            <div className="total-box mt-4">
              <div className="lbl">Total Pembayaran</div>
              <div className="amt">{fmt(finalTotal)}</div>
            </div>

            {/* PAYMENT */}
            <div className="payment-section mt-4">
              <div className="payment-title">Metode Pembayaran</div>

              <div className="bank-list">
                <span className="bank-tag">BCA</span>
                <span className="bank-tag">Mandiri</span>
                <span className="bank-tag">BRI</span>
                <span className="bank-tag">BNI</span>
                <span className="bank-tag">BSI</span>
                <span className="bank-tag">Visa</span>
                <span className="bank-tag">Mastercard</span>
                <span className="bank-tag">Muamalat</span>
              </div>
            </div>
            {/* <div className="extra-box mt-4">
              <strong>Catatan:</strong>
              <br />
              Pembayaran belum termasuk biaya tambahan bayi dan anak umur 2-7
              tahun
            </div> */}
          </div>
          <button className="btn-pay" onClick={createInvoice}>
            Bayar Sekarang
          </button>
          <a
            className="btn-confirm-wa"
            target="_blank"
            href={`https://wa.me/6281370907919?text=${encodeURIComponent(
              `Halo saya ingin konfirmasi booking umroh

Total Paket : ${fmt(cartTotal)}
Metode Bayar : ${paymentType === "dp" ? "DP" : "Lunas"}
Total Bayar Sekarang : ${fmt(finalTotal)}`,
            )}`}
          >
            Konfirmasi Pembayaran
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
