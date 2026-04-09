import React, { useState } from "react";
import "../css/auth.css";
import logo from "../assets/logo travel.png";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path
      fill="#EA4335"
      d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.46 3.09 29.52 1 24 1 14.82 1 7.01 6.48 3.44 14.27l7.08 5.5C12.3 13.63 17.69 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.1 24.55c0-1.57-.14-3.08-.4-4.55H24v8.61h12.42c-.54 2.9-2.18 5.36-4.64 7.01l7.14 5.55C43.19 37.18 46.1 31.32 46.1 24.55z"
    />
    <path
      fill="#FBBC05"
      d="M10.52 28.23A14.7 14.7 0 0 1 9.5 24c0-1.48.26-2.91.72-4.23L3.14 14.27A22.94 22.94 0 0 0 1 24c0 3.77.9 7.34 2.44 10.5l7.08-6.27z"
    />
    <path
      fill="#34A853"
      d="M24 47c5.52 0 10.16-1.83 13.54-4.97l-7.14-5.55c-1.97 1.32-4.49 2.1-6.4 2.1-6.31 0-11.7-4.14-13.48-9.77l-7.08 6.27C7.01 41.52 14.82 47 24 47z"
    />
  </svg>
);

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xl-4 col-lg-8 col-md-8 col-sm-8 col-11">
            <div className="auth-card">
              {/* Logo */}
              <div className="text-center mb-3">
                <img src={logo} alt="logo" className="auth-logo" />
              </div>

              <h5 className="text-center fw-semibold mb-1">
                {isLogin ? "Selamat Datang!" : "Buat Akun Baru"}
              </h5>
              <p
                className="text-center text-muted mb-4"
                style={{ fontSize: 13 }}
              >
                {isLogin
                  ? "Login untuk melanjutkan perjalananmu"
                  : "Daftar dan mulai eksplorasi"}
              </p>

              {/* Form */}
              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="contoh@email.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0813129293347"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukkan password"
                />
              </div>

              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label">Konfirmasi Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ulangi password"
                  />
                </div>
              )}

              <button className="btn auth-btn w-100 mt-1 mb-3">
                {isLogin ? "Login" : "Daftar Sekarang"}
              </button>

              {/* Divider */}
              <div className="divider">
                <span>atau lanjutkan dengan</span>
              </div>

              {/* Google */}
              <button className="btn google-btn w-100">
                <GoogleIcon />
                Login dengan Google
              </button>

              {/* Switch */}
              <p
                className="text-center mt-3 mb-0"
                style={{ fontSize: 13, color: "#666" }}
              >
                {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}
                <span
                  className="switch-auth ms-1"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Daftar sekarang" : "Login di sini"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
