import "../../css/blog.css";
import { useEffect } from "react";

const post = [
  {
    id: 1,
    title:
      "Umroh Plus Holiday Hana Tours: Fasilitas Lengkap & Destinasi Terbaik",
    excerpt:
      "Hana Tours hadir dengan Paket Umroh Plus Holiday — menunaikan ibadah sekaligus berwisata halal ke Dubai, Turki, hingga Mesir dalam satu perjalanan berkesan.",
    content: `Memahami minat umat Muslim yang ingin berumroh sembari berwisata halal, Hana Tours hadir dengan Paket Umroh Plus Holiday sebagai solusi perjalanan spiritual yang berkesan dan menyenangkan.

Dalam satu perjalanan, Sobat Hana dapat menunaikan ibadah yang khusyuk sekaligus berwisata muslim ke berbagai destinasi pilihan seperti Dubai, Turki, hingga Mesir, dengan rancangan itinerary yang rapi serta pendamping berpengalaman.

Fasilitas meliputi penginapan bintang 5 dekat Masjidil Haram, konsumsi 3x sehari menu halal, manasik umroh lengkap, transportasi ber-AC, dan asuransi perjalanan. Daftarkan diri Anda sekarang!`,
    category: "Paket Umroh",
    tag: "Featured",
    tagColor: "#c8932a",
    date: "12 Feb 2025",
    readTime: "5 min",
    author: { name: "Ahmad Fauzi", role: "Travel Consultant", avatar: "AF" },
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
  },
];

const DetailBlog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const data = post[0];

  return (
    <div className="blog-detail-page">
      <div className="container py-5" style={{ maxWidth: "780px" }}>
        {/* HERO IMAGE */}
        <div className="detail-image-wrapper mb-4">
          <img src={data.image} alt={data.title} className="detail-img" />
        </div>

        {/* TAG & META */}
        <div className="detail-tag-row mb-3">
          <span className="badge-tag" style={{ background: data.tagColor }}>
            {data.tag}
          </span>

          <span className="detail-category">{data.category}</span>

          <span className="detail-date">
            📅 {data.date} • {data.readTime} baca
          </span>
        </div>

        {/* TITLE */}
        <h1 className="detail-title mb-3">{data.title}</h1>

        <div className="detail-divider mb-4"></div>

        {/* CONTENT */}
        <div className="detail-content">
          {data.content.split("\n\n").map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>

        {/* AUTHOR */}
        <div className="detail-author-box mt-5">
          <div className="detail-avatar">{data.author.avatar}</div>

          <div>
            <div className="detail-author-name">{data.author.name}</div>
            <div className="detail-author-role">{data.author.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
