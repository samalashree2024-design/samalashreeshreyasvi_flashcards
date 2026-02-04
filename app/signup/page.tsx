"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      {/* LEFT SIDE: BRANDING & CHARACTER (Matches Login) */}
      <div style={styles.leftSection}>
        <div style={styles.bgShapes} /> 
        
        <div style={styles.logoBranding}>
          <img 
            src="/konnichiwowlogonew (1) 1.png" 
            alt="KonnichiWow Logo" 
            style={styles.brandLogo} 
          />
        </div>

        <img 
          src="/character.png" 
          alt="Character" 
          style={styles.characterImg} 
        />
      </div>

      {/* RIGHT SIDE: SIGN UP FORM */}
      <div style={styles.rightSection}>
        <div style={styles.signupCard}>
          <h2 style={styles.title}>Sign up</h2>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email address</label>
            <input 
              type="email" 
              placeholder="Email address" 
              style={styles.inputField} 
            />
          </div>

          <div style={styles.row}>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Username</label>
              <input 
                type="text" 
                placeholder="Username" 
                style={styles.inputField} 
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>Contact Number</label>
              <input 
                type="text" 
                placeholder="Contact Number" 
                style={styles.inputField} 
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              style={styles.inputField} 
            />
          </div>

          <button 
            style={styles.signUpBtn} 
            onClick={() => router.push("/level")}
          >
            Sign up
          </button>

          <div style={styles.divider}>or</div>

          <button style={styles.googleBtn}>
            <img 
              src="https://cdn-teams-slug.flaticon.com/google.jpg" 
              alt="Google" 
              style={styles.googleIcon} 
            />
            Continue with Google
          </button>

          <p style={styles.footerText}>
            Already on KonnichiWow? <span style={styles.loginLink} onClick={() => router.push("/login")}>LoginPage</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { display: "flex", height: "100vh", width: "100vw", backgroundColor: "#F3F4F6", fontFamily: "sans-serif" },
  leftSection: { 
    flex: 1, 
    backgroundColor: "#f6f8f8", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    position: "relative",
    overflow: "hidden" 
  },
  bgShapes: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "url('/bg-shape.png')",
    backgroundSize: "cover",
    opacity: 0.4, 
    pointerEvents: "none",
    zIndex: 1
  },
  logoBranding: { position: "absolute", top: "40px", left: "40px", zIndex: 10 },
  brandLogo: { height: "50px", width: "auto" },
  characterImg: { width: "75%", maxWidth: "500px", objectFit: "contain", zIndex: 5 },
  rightSection: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" },
  signupCard: { 
    width: "100%", maxWidth: "500px", padding: "40px", backgroundColor: "white", 
    borderRadius: "24px", border: "3px solid black", boxShadow: "10px 10px 0px rgba(0,0,0,1)" 
  },
  title: { fontSize: "32px", fontWeight: "800", marginBottom: "25px", color: "#000" },
  inputGroup: { marginBottom: "15px" },
  row: { display: "flex", gap: "15px", marginBottom: "15px" },
  label: { display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "6px", color: "#374151" },
  inputField: { 
    width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #D1D5DB", 
    fontSize: "14px", color: "#000", backgroundColor: "#FFF", outline: "none"
  },
  signUpBtn: { 
    width: "100%", padding: "14px", backgroundColor: "#E91E63", color: "white", 
    border: "none", borderRadius: "30px", fontSize: "16px", fontWeight: "bold", 
    cursor: "pointer", marginTop: "10px" 
  },
  divider: { textAlign: "center", color: "#9CA3AF", margin: "15px 0", fontSize: "14px" },
  googleBtn: { 
    width: "100%", padding: "12px", backgroundColor: "white", border: "1px solid #D1D5DB", 
    borderRadius: "30px", fontSize: "14px", color: "#374151", cursor: "pointer", 
    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" 
  },
  googleIcon: { width: "18px", height: "18px" },
  footerText: { textAlign: "center", marginTop: "20px", fontSize: "14px", color: "#6B7280" },
  loginLink: { color: "#000", fontWeight: "bold", cursor: "pointer", textDecoration: "underline" }
};