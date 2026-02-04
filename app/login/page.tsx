"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      {/* LEFT SIDE: BRANDING & CHARACTER */}
      <div style={styles.leftSection}>
        {/* Your original background shapes */}
        <div style={styles.bgShapes} /> 
        
        <div style={styles.logoBranding}>
          {/* Your logo from the public folder */}
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

      {/* RIGHT SIDE: LOGIN FORM */}
      <div style={styles.rightSection}>
        <div style={styles.loginCard}>
          <h2 style={styles.title}>Sign in</h2>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Enter your username or email address</label>
            <input 
              type="text" 
              placeholder="Username or email address" 
              style={styles.inputField} 
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Enter your Password</label>
            <div style={styles.passwordWrapper}>
              <input 
                type="password" 
                placeholder="Password" 
                style={styles.inputField} 
              />
              <span style={styles.showText}>Show</span>
            </div>
          </div>

          <div style={styles.forgotPass}>Forgot Password?</div>

          <button 
            style={styles.signInBtn} 
            onClick={() => router.push("/level")}
          >
            Sign in
          </button>

          <div style={styles.divider}>or</div>

          {/* GOOGLE BUTTON WITH ICON */}
          <button style={styles.googleBtn}>
            <img 
              src="https://cdn-teams-slug.flaticon.com/google.jpg" 
              alt="Google" 
              style={styles.googleIcon} 
            />
            Continue with Google
          </button>

          <p style={styles.footerText}>
            New to KonnichiWow? <span style={styles.joinNow} onClick={() => router.push("/signup")}>Join now</span>
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
    backgroundColor: "#F3F4F6",
    fontFamily: "sans-serif"
  },
  leftSection: { 
    flex: 1, 
    backgroundColor: "#f6f9f8", 
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
    pointerEvents: "none", // Allows you to click the logo/character if needed
    zIndex: 1
  },
  logoBranding: { 
    position: "absolute", 
    top: "40px", 
    left: "40px",
    zIndex: 10 
  },
  brandLogo: { 
    height: "50px", 
    width: "auto" 
  },
  characterImg: { 
    width: "75%", 
    maxWidth: "500px",
    objectFit: "contain",
    zIndex: 5 
  },
  rightSection: { 
    flex: 1, 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center" 
  },
  loginCard: { 
    width: "100%",
    maxWidth: "450px", 
    padding: "40px", 
    backgroundColor: "white", 
    borderRadius: "24px", 
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)" 
  },
  title: { 
    fontSize: "32px", 
    fontWeight: "800", 
    marginBottom: "30px", 
    color: "#1F2937" 
  },
  inputGroup: { 
    marginBottom: "20px" 
  },
  label: { 
    display: "block", 
    fontSize: "13px", 
    fontWeight: "600", 
    marginBottom: "8px", 
    color: "#374151" 
  },
  inputField: { 
    width: "100%", 
    padding: "14px", 
    borderRadius: "10px", 
    border: "1px solid #D1D5DB", 
    fontSize: "14px", 
    color: "#000000", // Fixed: text is now black
    backgroundColor: "#FFFFFF", // Fixed: background is now white
    outline: "none"
  },
  passwordWrapper: { 
    position: "relative" 
  },
  showText: { 
    position: "absolute", 
    right: "15px", 
    top: "15px", 
    fontSize: "12px", 
    color: "#E91E63", 
    cursor: "pointer",
    fontWeight: "600"
  },
  forgotPass: { 
    textAlign: "right", 
    fontSize: "12px", 
    color: "#E91E63", 
    marginBottom: "25px", 
    cursor: "pointer",
    fontWeight: "600"
  },
  signInBtn: { 
    width: "100%", 
    padding: "16px", 
    backgroundColor: "#E91E63", 
    color: "white", 
    border: "none", 
    borderRadius: "30px", 
    fontSize: "16px", 
    fontWeight: "bold", 
    cursor: "pointer", 
    marginBottom: "20px",
    transition: "transform 0.1s"
  },
  divider: { 
    textAlign: "center", 
    color: "#9CA3AF", 
    marginBottom: "20px", 
    fontSize: "14px" 
  },
  googleBtn: { 
    width: "100%", 
    padding: "14px", 
    backgroundColor: "white", 
    border: "1px solid #D1D5DB", 
    borderRadius: "30px", 
    fontSize: "14px", 
    color: "#374151", 
    cursor: "pointer", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    gap: "10px",
    fontWeight: "500"
  },
  googleIcon: { 
    width: "18px", 
    height: "18px" 
  },
  footerText: { 
    textAlign: "center", 
    marginTop: "25px", 
    fontSize: "14px", 
    color: "#6B7280" 
  },
  joinNow: { 
    color: "#000", 
    fontWeight: "bold", 
    cursor: "pointer",
    textDecoration: "underline"
  }
};