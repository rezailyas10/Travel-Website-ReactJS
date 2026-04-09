import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./mainLayout";
import PlainLayout from "./plainLayout";

import Home from "./pages/home";
import Haji from "./pages/haji";
import Umrah from "./pages/umrah";
import Detail from "./pages/detail/detail";
import Blog from "./pages/blog/blog";
import DetailBlog from "./pages/blog/detail";
import Profile from "./pages/about/profile";
import Gallery from "./pages/about/gallery";
import PDF from "./pages/detail/pdf";
import Login from "./auth/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HALAMAN DENGAN NAVBAR + FOOTER */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/haji" element={<Haji />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route path="/umrah-detail" element={<Detail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<DetailBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>

        {/* HALAMAN TANPA NAVBAR + FOOTER */}
        <Route element={<PlainLayout />}>
          <Route path="/pdf" element={<PDF />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
