import React, { useState } from "react";
import "../../css/profile.css";
import kabah from "../../assets/kabah.jpg";

const gallery = [
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 1",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 2",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 3",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 4",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 5",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 6",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 6",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 6",
  },
  {
    img: kabah,
    title: "Dokumentasi Jamaah Umroh Hana Tours 6",
  },
];

function Gallery() {
  const [activeImg, setActiveImg] = useState(null);
  return (
    <>
      <section className="blog-section">
        <div className="blog-container">
          {/* Hero Text */}
          <h1>Galeri Jamaah DTI</h1>
          <p>
            Kumpulan Foto dan Momen Berharga dari Jamaah DTI yang Telah
            Melakukan Perjalanan Umroh dan Haji Bersama Kami. Saksikan Keindahan
            dan Kebahagiaan dalam Setiap Langkah Perjalanan Suci Mereka.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setActiveImg(item)}
              >
                <img src={item.img} alt={item.title} />

                <div className="gallery-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POPUP */}
        {activeImg && (
          <div className="gallery-popup" onClick={() => setActiveImg(null)}>
            <img src={activeImg.img} alt="preview" />
          </div>
        )}
      </section>
    </>
  );
}

export default Gallery;
