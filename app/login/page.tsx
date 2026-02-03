"use client";

import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <div style={styles.container}>
      {/* LEFT SIDE: CHARACTER & BACKGROUND */}
      <div style={styles.visualSection}>
        <Image
          src="/bg-shape.png"
          alt="Background Shape"
          fill
          priority
          style={styles.bgShape}
        />
        <div style={styles.characterWrapper}>
          <Image
            src="/character.png"
            alt="Character"
            width={480}
            height={580}
            style={styles.characterImage}
          />
        </div>
        <div style={styles.logoTag}>
            <h2 style={{ color: '#E91E63', margin: 0, fontSize: '24px' }}>KONNICHI</h2>
            <h1 style={{ color: '#E91E63', margin: 0, fontSize: '32px', fontWeight: 'bold' }}>WOW</h1>
        </div>
      </div>

      {/* RIGHT SIDE: SIGN IN FORM */}
      <div style={styles.formSection}>
        <div style={styles.loginCard}>
          <h1 style={styles.title}>Sign in</h1>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Enter your username or email address</label>
            <input type="text" placeholder="Username or email address" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Enter your Password</label>
            <div style={styles.passwordWrapper}>
              <input type="password" placeholder="Password" style={styles.input} />
              <span style={styles.showToggle}>Show</span>
            </div>
          </div>

          <p style={styles.forgotPassword}>Forgot Password?</p>

          <button style={styles.signInButton}>Sign in</button>

          <div style={styles.divider}>
            <hr style={styles.line} /> <span>or</span> <hr style={styles.line} />
          </div>

          <button style={styles.googleButton}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" width="18" />
            Continue with Google
          </button>

          <p style={styles.footerText}>
            New to KonnichiWow? <span style={styles.link}><a href="/signup">Join now</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    fontFamily: "sans-serif",
  },
  visualSection: {
    flex: 1,
    position: "relative",
    backgroundColor: "#22C55E", // The green background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bgShape: {
    objectFit: "cover",
    zIndex: 1,
  },
  characterWrapper: {
    zIndex: 2,
    position: "relative",
  },
  characterImage: {
    objectFit: "contain",
  },
  logoTag: {
    position: "absolute",
    top: "40px",
    left: "40px",
    zIndex: 3,
  },
  formSection: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginCard: {
    width: "100%",
    maxWidth: "450px",
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "24px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#1F2937",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "8px",
    color: "#4B5563",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #080b10",
    fontSize: "14px",
    outline: "none",
  },
  passwordWrapper: {
    position: "relative",
  },
  showToggle: {
    position: "absolute",
    right: "12px",
    top: "12px",
    fontSize: "12px",
    color: "#E91E63",
    cursor: "pointer",
  },
  forgotPassword: {
    fontSize: "12px",
    color: "#E91E63",
    textAlign: "right",
    marginBottom: "24px",
    cursor: "pointer",
  },
  signInButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#E91E63",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "20px",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#9CA3AF",
    fontSize: "12px",
    marginBottom: "20px",
  },
  line: { flex: 1, border: "0.5px solid #E5E7EB" },
  googleButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "white",
    border: "1px solid #D1D5DB",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "20px",
  },
  footerText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#4B5563",
  },
  link: {
    color: "#1F2937",
    fontWeight: "bold",
    cursor: "pointer",
  },
};