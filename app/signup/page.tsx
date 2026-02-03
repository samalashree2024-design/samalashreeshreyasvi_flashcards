"use client";

import Image from "next/image";

export default function SignupPage() {
  return (
    <>
      {/* Placeholder color fix */}
      <style>
        {`
          input::placeholder {
            color: #000; /* black placeholder text */
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Background Shape */}
        <Image
          src="/bg-shape.png"
          alt="Background"
          fill
          priority
          style={{ objectFit: "cover" as const, zIndex: 0 }}
        />

        {/* Character */}
        <div style={styles.character}>
          <Image
            src="/character.png"
            alt="Character"
            width={420}
            height={420}
          />
        </div>

        {/* Signup Card */}
        <div style={styles.card}>
          <h1 style={styles.title}>Sign up</h1>

          <label style={styles.label}>Email address</label>
          <input style={styles.input} placeholder="Email address" />

          <div style={styles.row}>
            <div style={styles.rowItem}>
              <label style={styles.label}>Username</label>
              <input style={styles.input} placeholder="Username" />
            </div>
            <div style={styles.rowItem}>
              <label style={styles.label}>Contact Number</label>
              <input style={styles.input} placeholder="Contact Number" />
            </div>
          </div>

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
          />

          <button style={styles.primaryBtn}>Sign up</button>

          <div style={styles.or}>or</div>

          <button style={styles.googleBtn}>
           
            Continue with Google
          </button>

          <p style={styles.footerText}>
            Already on KonnichiWow?{" "}
            <span style={styles.link}> <a href="/login">LoginPage</a></span>
          </p>
        </div>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#26ECB4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  character: {
    position: "absolute",
    left: "8%",
    bottom: "10%",
    zIndex: 1,
  },

  card: {
    zIndex: 2,
    background: "#fff",
    width: 420,
    padding: 30,
    borderRadius: 20,
    boxShadow: "12px 12px 0 #000",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 20,
    color: "#000",
  },

  label: {
    fontSize: 14,
    color: "#000",
    marginBottom: 6,
    display: "block",
  },

  input: {
    width: "100%",
    padding: "12px",
    fontSize: 14,
    borderRadius: 8,
    border: "1px solid #ccc",
    marginBottom: 15,
    outline: "none",
    boxSizing: "border-box",
    color: "#000",
  },

  row: {
    display: "flex",
    gap: 15,
    marginBottom: 15,
  },

  rowItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  primaryBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#E91E63",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
    marginTop: 10,
  },

  or: {
    textAlign: "center",
    margin: "15px 0",
    color: "#555",
  },

  googleBtn: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#fff",
    fontWeight: 500,
    color:"#000",
  },

  footerText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
    color: "#000",
  },

  link: {
    color: "#000",
    fontWeight: 600,
    cursor: "pointer",
  },
};
