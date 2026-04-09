import "../../css/pdf.css";
import html2pdf from "html2pdf.js";
import logo from "../../assets/logo travel.png";

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const ITINERARY = [
  {
    day: "1",
    date: "AHAD\n16 AGS",
    loc: "JAKARTA — MEETING POINT",
    meal: "Meals on Board",
    acts: [
      "Berkumpul di Meeting Point Airport Soekarno Hatta 4 jam sebelum flight",
      "Flight ke Jeddah transit Doha / Abu Dhabi / Muscat",
    ],
  },
  {
    day: "2",
    date: "SENIN\n17 AGS",
    loc: "DOHA / ABU DHABI / MUSCAT — JEDDAH — MADINAH",
    meal: "Breakfast / Lunch / Dinner",
    acts: [
      "Landing Jeddah, perjalanan menuju Madinah",
      "Tiba di Madinah, check in hotel, istirahat",
    ],
  },
  {
    day: "3",
    date: "SELASA\n18 AGS",
    loc: "MADINAH AL MUNAWARAH",
    meal: "Breakfast / Lunch / Dinner",
    acts: [
      "Ibadah di Masjid Nabawi",
      "Walking tour sekitaran Masjid Nabawi sore hari",
      "Ziarah Raudhah (waktu tentative)",
    ],
  },
  {
    day: "4",
    date: "RABU\n19 AGS",
    loc: "MADINAH CITY TOUR",
    meal: "Breakfast / Lunch / Dinner",
    acts: [
      "City Tour: Uhud, Masjid Quba, belanja oleh-oleh kurma Madinah",
      "Manasik Umroh — pemantapan tata cara umroh sesuai sunnah",
    ],
  },
  {
    day: "5",
    date: "KAMIS\n20 AGS",
    loc: "MADINAH — MEKKAH",
    meal: "Breakfast / Lunch / Dinner",
    acts: [
      "Check out hotel, menuju stasiun kereta cepat Madinah–Mekkah",
      "Tiba di Mekkah, check in hotel, istirahat & makan malam",
      "Menuju Masjidil Haram untuk ibadah UMROH",
    ],
  },
  {
    day: "6",
    date: "JUM'AT\n21 AGS",
    loc: "MEKKAH AL MUKARRAMAH",
    meal: "Breakfast / Lunch / Dinner",
    acts: ["Free time ibadah di Masjidil Haram"],
  },
  {
    day: "7",
    date: "SABTU\n22 AGS",
    loc: "MEKKAH CITY TOUR",
    meal: "Breakfast / Lunch / Dinner",
    acts: [
      "City Tour: Jabal Tsur, Jabal Rahmah, Arofah, Mina, Jabal Nur",
      "Miqat dan umroh kedua bagi yang berniat",
    ],
  },
  {
    day: "8",
    date: "AHAD\n23 AGS",
    loc: "MEKKAH — CITY TOUR THAIF",
    meal: "Breakfast / Lunch / Dinner",
    acts: [
      "City Tour Thaif: Masjid Ibnu Abbas & Rose Garden Factory",
      "Makan siang menu nasi mandi khas Arab",
      "Al Hada Telefric — kereta gondola (opsional, tiket terpisah)",
    ],
  },
  {
    day: "9",
    date: "SENIN\n24 AGS",
    loc: "MEKKAH — JEDDAH — JAKARTA",
    meal: "Breakfast / Lunch / Meals on Board",
    acts: [
      "Check out hotel, menuju King Abdul Aziz Airport Jeddah",
      "Flight ke Jakarta transit Doha / Abu Dhabi",
      "Tiba di Soekarno Hatta Terminal 3 — Alhamdulillah 🤲",
    ],
  },
];

const HOTELS = [
  {
    tier: "UMROH HEMAT",
    name: "Dar Al Naem Madinah / Setaraf ★3\nLe Meridien Tower Mekkah (Shuttle) / Setaraf ★4",
    prices: [
      { type: "Quad", sub: "Sekamar ber-4", val: "Rp 26.900.000" },
      { type: "Triple", sub: "Sekamar ber-3", val: "Rp 28.900.000" },
      { type: "Double", sub: "Sekamar ber-2", val: "Rp 30.900.000" },
    ],
  },
  {
    tier: "UMROH PREMIUM",
    name: "Hotel Setaraf ★5 Madinah\n& Setaraf ★5 Mekkah (dekat Masjidil Haram)",
    prices: [
      { type: "Quad", sub: "Sekamar ber-4", val: "Rp 35.900.000" },
      { type: "Triple", sub: "Sekamar ber-3", val: "Rp 38.900.000" },
      { type: "Double", sub: "Sekamar ber-2", val: "Rp 42.900.000" },
    ],
  },
];

const PAYMENT = [
  { tahap: "DP-1", nom: "Rp 5.000.000", waktu: "Pada Hari Pendaftaran" },
  { tahap: "DP-2", nom: "Rp 5.000.000", waktu: "25 Februari 2026" },
  {
    tahap: "Pelunasan",
    nom: "Rp 16.900.000",
    waktu: "Paling Lambat H-45 Keberangkatan",
  },
];

const INCLUDED = [
  "Tiket Pesawat PP (Qatar Airways / Etihad / Oman Air / setaraf)",
  "Bagasi 25 kg",
  "Kereta Cepat Madinah–Mekkah (free)",
  "Visa, Asuransi & Siskopatuh",
  "Airport Handling (Soekarno Hatta)",
  "Hotel Fullboard (3x makan sehari)",
  "City Tour Madinah & Mekkah",
  "Dokumentasi Photo & Video",
  "Air Zam-Zam 5 Liter",
  "ID Card, Kain Ihram, Syal, Buku Doa & Luggage Tag",
  "Seragam By Dress Code",
  "2x Manasik (online Google Meets & offline di Madinah)",
];

const EXCLUDED = [
  "Biaya pembuatan paspor",
  "Vaksin Meningitis & Polio (wajib)",
  "Biaya-biaya yang bersifat pribadi",
  "Perlengkapan pribadi (seragam batik / koper group tidak diperlukan)",
];

const VISA_REQ = [
  "Paspor aktif min. 6 bulan sebelum expired",
  "Foto 4×6 cm background putih 2 lembar / soft copy (tanpa kacamata & softlens)",
  "Copy Kartu Keluarga / soft copy",
  "Surat nikah (bila sudah menikah) / soft copy",
  "Copy KTP / soft copy",
  "Sertifikat Vaksin Meningitis & Polio",
];

const TERMS_UMUM = [
  "Seluruh peserta wajib mematuhi ketentuan yang telah ditetapkan oleh DTI (Digital Travel Indonesia).",
  "Program Umroh ini TIDAK menggunakan seragam batik & koper group.",
  "Peserta berusia di atas 55 tahun WAJIB didampingi pendamping.",
  "Peserta wajib mematuhi perubahan aturan dari pemerintah Kerajaan Saudi Arabia, pemerintah Indonesia, dan maskapai.",
  "DTI berhak membatalkan perjalanan secara sepihak jika peserta tidak mematuhi ketentuan yang berlaku.",
  "Peserta dianggap mengundurkan diri apabila tidak mematuhi skema pembayaran sesuai jadwal.",
  "Jadwal keberangkatan dapat berubah sewaktu-waktu menyesuaikan ketersediaan seat maskapai.",
  "Apabila kurs USD terhadap IDR melebihi 17.500, akan ada penyesuaian harga.",
];

const TERMS_CANCEL = [
  "Reschedule setelah DP pertama dikenakan biaya admin Rp 1.000.000/peserta (paling lambat H-46).",
  "Reschedule dikenakan biaya admin Rp 3.000.000/peserta (paling lambat H-45).",
  "Reschedule paling lambat H-31 dipotong seharga tiket.",
  "Pengalihan ke peserta lain paling lambat H-45.",
  "Setelah tiket issued, peserta TIDAK diperkenankan melakukan perubahan jadwal atau pengalihan dengan alasan apapun.",
];

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════ */
function SectionHeader({ icon, text }) {
  return (
    <div className="sec-header">
      <span className="sec-header-icon">{icon}</span>
      <span className="sec-header-text">{text}</span>
    </div>
  );
}

function ItinRow({ item }) {
  return (
    <div className="itin-row">
      <div className="itin-day">
        <div className="day-label">DAY</div>
        <div className="day-num">{item.day}</div>
        <div className="day-date">{item.date}</div>
      </div>
      <div className="itin-body">
        <div className="itin-loc">{item.loc}</div>
        <div className="itin-meal">{item.meal}</div>
        {item.acts.map((act, i) => (
          <div className="itin-act" key={i}>
            <span className="itin-dot" />
            <span>{act}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelCol({ hotel }) {
  return (
    <div className="hotel-col">
      <div className="hotel-head">
        <div className="hotel-tier">{hotel.tier}</div>
        <div className="hotel-name">{hotel.name}</div>
      </div>
      {hotel.prices.map((p, i) => (
        <div className="price-row" key={i}>
          <div>
            <span className="price-type">{p.type}</span>
            <span className="price-sub">{p.sub}</span>
          </div>
          <span className="price-val">{p.val}</span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function BrosurUmrah() {
  function downloadPDF() {
    const element = document.getElementById("brosurPDF");

    const opt = {
      margin: 0,
      filename: "Brosur_Umroh_DTI.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3,
        useCORS: true,
        // Samakan lebar canvas dengan elemen agar tidak ada crop
        windowWidth: element.scrollWidth,
        scrollX: 0,
        scrollY: 0,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .outputPdf("bloburl")
      .then((url) => {
        window.open(url);
      });
  }

  return (
    <div className="brosur-page">
      {/* ══════ BROSUR ══════ */}
      <div id="brosurPDF" className="brosur">
        {/* ══════ COVER ══════ */}
        <div className="cover">
          {/* Logo di tengah atas */}
          <div className="cover-logo-center">
            <div className="cover-logo-wrap">
              <img
                src={logo}
                alt="DTI Logo"
                onError={(e) => {
                  // Fallback teks jika gambar gagal load
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML =
                    '<span class="cover-logo-text">DTI</span>';
                }}
              />
            </div>
            <div className="cover-brand-name">PT Digital Travel Indonesia</div>
            <div className="cover-brand-sub">SK PPIU: 91203002216360003</div>
          </div>

          {/* Hero */}
          <div className="cover-hero">
            <div className="cover-tag">Special New Season</div>
            <div className="cover-main-title">UMROH</div>
            <div className="cover-sub">9 Days Journey to the Holy Land</div>
            <div className="cover-hr" />
            <div className="cover-date">16 Agustus – 24 Agustus 2026</div>
            <div className="cover-hotel-note">
              Hotel Setaraf ★3 & Le Meridien Tower Mekkah (Shuttle) / Setaraf ★4
            </div>
          </div>

          {/* Contacts */}
          <div className="cover-contacts">
            <span>📞 0813-7090-7919</span>
            <span>📞 0813-8991-9754</span>
            <span>📞 0822-1144-6855</span>
            <span>📞 0877-6396-0265</span>
            <span>🌐 www.dtravelind.com</span>
            <span>📷 umrahhaji.dti</span>
          </div>
        </div>

        {/* ══════ ITINERARY ══════ */}
        <SectionHeader icon="✈" text="Itinerary Perjalanan" />
        <div>
          {ITINERARY.map((item) => (
            <ItinRow key={item.day} item={item} />
          ))}
        </div>

        {/* ══════ HOTEL & HARGA ══════ */}
        <SectionHeader icon="🏨" text="Pilihan Hotel & Harga" />
        <div className="hotel-grid">
          {HOTELS.map((h, i) => (
            <HotelCol key={i} hotel={h} />
          ))}
        </div>
        <div className="discount-bar">
          <div className="discount-title">
            🎁 Infant & Child No Bed — Potongan Harga
          </div>
          <div className="discount-row">
            <span>Infant (di bawah 2 tahun)</span>
            <strong>Diskon IDR 11.000.000</strong>
          </div>
          <div className="discount-row">
            <span>Child No Bed (2–7 tahun)</span>
            <strong>Diskon IDR 3.000.000</strong>
          </div>
        </div>

        {/* ══════ SKEMA PEMBAYARAN ══════ */}
        <SectionHeader icon="💳" text="Skema Pembayaran" />
        <table className="pay-table">
          <thead>
            <tr>
              <th>Tahapan</th>
              <th>Nominal</th>
              <th>Waktu Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            {PAYMENT.map((p, i) => (
              <tr key={i}>
                <td className="td-tahap">{p.tahap}</td>
                <td className="td-nom">{p.nom}</td>
                <td>{p.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ══════ FASILITAS & VISA ══════ */}
        <SectionHeader icon="✅" text="Fasilitas & Persyaratan Visa" />
        <div className="fac-grid">
          {/* Termasuk */}
          <div className="fac-col">
            <div className="fac-head incl">✓ Termasuk</div>
            <div className="fac-body">
              {INCLUDED.map((item, i) => (
                <div className="fac-item" key={i}>
                  <span className="fac-icon g">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tidak Termasuk */}
          <div className="fac-col">
            <div className="fac-head excl">✗ Tidak Termasuk</div>
            <div className="fac-body">
              {EXCLUDED.map((item, i) => (
                <div className="fac-item" key={i}>
                  <span className="fac-icon r">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syarat Visa */}
          <div className="fac-col">
            <div className="fac-head visa">→ Syarat Visa</div>
            <div className="fac-body">
              {VISA_REQ.map((item, i) => (
                <div className="fac-item" key={i}>
                  <span className="fac-icon b">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════ SYARAT & KETENTUAN ══════ */}
        <SectionHeader icon="📋" text="Syarat & Ketentuan" />
        <div className="terms-wrap">
          <div className="terms-note">
            Peserta umroh dianggap telah{" "}
            <strong>membaca, mengerti, dan menerima</strong> seluruh ketentuan
            berikut setelah melakukan pendaftaran.
          </div>

          <div className="terms-pdf-sub">Ketentuan Umum</div>
          {TERMS_UMUM.map((t, i) => (
            <div className="terms-row" key={i}>
              <span className="terms-num">{i + 1}.</span>
              <span>{t}</span>
            </div>
          ))}

          <div className="terms-pdf-sub">
            Pembatalan / Perubahan Pendaftaran
          </div>
          {TERMS_CANCEL.map((t, i) => (
            <div className="terms-row" key={i}>
              <span className="terms-arrow">→</span>
              <span>{t}</span>
            </div>
          ))}

          <div className="penalty-title">Penalty Fee — Pembatalan Sepihak:</div>
          <div className="penalty-grid">
            <div className="pen-card low">
              <div className="pen-when">H-45</div>
              <div className="pen-amount">IDR 12.000.000</div>
              <div className="pen-label">Cancellation Fee</div>
            </div>
            <div className="pen-card mid">
              <div className="pen-when">H-35 s/d H-15</div>
              <div className="pen-amount">IDR 17.000.000</div>
              <div className="pen-label">Cancellation Fee</div>
            </div>
            <div className="pen-card high">
              <div className="pen-when">H-15 s/d Hari H</div>
              <div className="pen-amount">FULL CHARGE</div>
              <div className="pen-label">Cancellation Fee</div>
            </div>
          </div>
          <div className="dp-note">
            * Down Payment bersifat non-refundable / TIDAK DAPAT dikembalikan
          </div>

          <div className="terms-pdf-sub">
            Perubahan Rencana & Jadwal Perjalanan
          </div>
          <div className="terms-row">
            <span className="terms-arrow">→</span>
            <span>
              Dalam kondisi tertentu, rencana perjalanan baik akomodasi,
              maskapai maupun jadwal program dapat berubah tanpa pemberitahuan
              terlebih dahulu demi kepentingan dan kelancaran program.
            </span>
          </div>
          <div className="terms-row">
            <span className="terms-arrow">→</span>
            <span>
              DTI <strong>tidak bertanggung jawab</strong> atas segala risiko
              dari perubahan jadwal yang dilakukan oleh maskapai penerbangan dan
              provider transportasi selama program berjalan.
            </span>
          </div>
        </div>

        {/* ══════ FOOTER ══════ */}
        <div className="brosur-footer">
          <div className="footer-company">PT Digital Travel Indonesia</div>
          <div className="footer-ppiu">SK PPIU: 91203002216360003</div>
          <div className="footer-address">
            Ruko Golden Road Blok C27 No.57, BSD City – Tangerang Selatan
          </div>
          <div className="footer-phones">
            <span className="footer-phone">0813-7090-7919</span>
            <span className="footer-phone">0813-8991-9754</span>
            <span className="footer-phone">0822-1144-6855</span>
            <span className="footer-phone">0877-6396-0265</span>
          </div>
          <div className="footer-web">
            📷 umrahhaji.dti &nbsp;·&nbsp; 🌐 www.dtravelind.com
          </div>
        </div>
      </div>
    </div>
  );
}
