import React from "react";
import "../../css/blog.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title:
      "Umroh Plus Holiday Hana Tours: Fasilitas Lengkap & Destinasi Terbaik",
    excerpt:
      "Hana Tours hadir dengan Paket Umroh Plus Holiday — menunaikan ibadah sekaligus berwisata halal ke Dubai, Turki, hingga Mesir dalam satu perjalanan berkesan.",
    content: `Memahami minat umat Muslim yang ingin berumroh sembari berwisata halal, Hana Tours hadir dengan Paket Umroh Plus Holiday sebagai solusi perjalanan spiritual yang berkesan dan menyenangkan.\n\nDalam satu perjalanan, Sobat Hana dapat menunaikan ibadah yang khusyuk sekaligus berwisata muslim ke berbagai destinasi pilihan seperti Dubai, Turki, hingga Mesir, dengan rancangan itinerary yang rapi serta pendamping berpengalaman.\n\nFasilitas meliputi penginapan bintang 5 dekat Masjidil Haram, konsumsi 3x sehari menu halal, manasik umroh lengkap, transportasi ber-AC, dan asuransi perjalanan. Daftarkan diri Anda sekarang!`,
    category: "Paket Umroh",
    tag: "Featured",
    tagColor: "#c8932a",
    date: "12 Feb 2025",
    readTime: "5 min",
    author: { name: "Ahmad Fauzi", role: "Travel Consultant", avatar: "AF" },
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
  },
  {
    id: 2,
    title: "Daftar Bulan Umroh Paling Sepi Low Season 2026, Harga Lebih Hemat",
    excerpt:
      "Mengetahui periode low season bisa menghemat biaya umroh hingga 30%. Simak daftar bulan-bulan sepi di tahun 2026 dan keuntungannya.",
    content: `Di sepanjang periode low season, jumlah jemaah relatif lebih sedikit sehingga harga tiket dan akomodasi lebih terjangkau. Selain hemat, ibadah pun terasa lebih khusyuk karena Masjidil Haram tidak terlalu padat.\n\nBulan low season umroh 2026: Januari, Februari, Mei, Juni (di luar musim haji), September, dan Oktober. Hindari Ramadan, Dzulhijjah, dan akhir tahun karena harga biasanya melonjak.\n\nKeuntungan berangkat di musim sepi: harga paket lebih murah hingga 30%, tawaf dan sa'i lebih nyaman, waktu di Raudhah lebih leluasa, dan pelayanan hotel lebih personal.`,
    category: "Tips Umroh",
    tag: "Tips",
    tagColor: "#5aaa72",
    date: "5 Jan 2025",
    readTime: "4 min",
    author: { name: "Budi Santoso", role: "Content Writer", avatar: "BS" },
    image:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80",
  },
];

const Blog = () => {
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
      <section className="blog-section">
        <div className="blog-container">
          {/* Hero Text */}
          <h1>Kumpulan Artikel Umroh & Haji</h1>
          <p>
            Temukan Berbagai Tips, Panduan, dan Informasi Terbaru Seputar
            Perjalanan Umroh dan Haji di Blog Kami. Dapatkan Wawasan Mendalam
            untuk Merencanakan Perjalanan Suci Anda dengan Lebih Baik.
          </p>
        </div>
      </section>

      <div>
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {posts.map((post) => (
              <div className="col-12 col-md-6 col-lg-5" key={post.id}>
                <Link to="/blog-detail" className="blog-card-link">
                  <div className="card">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="card-img-top"
                    />

                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span
                          className="badge-tag"
                          style={{ background: post.tagColor }}
                        >
                          {post.tag}
                        </span>
                        <span className="card-date">{post.date}</span>
                      </div>

                      <div className="card-title">{post.title}</div>

                      <p className="card-excerpt flex-grow-1">{post.excerpt}</p>

                      <div className="card-footer-row">
                        <div className="author-mini">
                          <div className="avatar">{post.author.avatar}</div>
                          <div>
                            <div className="author-name">
                              {post.author.name}
                            </div>
                            <div className="read-time">
                              {post.readTime} baca
                            </div>
                          </div>
                        </div>

                        <span className="read-more">Baca →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
