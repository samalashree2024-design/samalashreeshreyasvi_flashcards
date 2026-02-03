"use client";

import React from "react";

export default function LevelsPage() {
  const levels = ["N5", "N4", "N3", "N2", "N1"];

  const handleLevelClick = (level: string) => {
    console.log(`Selected Level: ${level}`);
    // Add your navigation logic here, e.g., router.push(`/study/${level}`)
  };

  return (
    <div style={styles.container}>
      {/* Pink Header Bar */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <span style={styles.logoTextKonnichi}>KONNICHI</span>
          <span style={styles.logoTextWow}>WOW</span>
        </div>
      </div>

      {/* Main Content Area with Background Pattern */}
      <div style={styles.content}>
        {/* White Card Container */}
        <div style={styles.card}>
          <h1 style={styles.title}>Select JLPT Level</h1>
          
          <div style={styles.buttonGrid}>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => handleLevelClick(level)}
                style={styles.levelButton}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F9FAFB",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    height: "60px",
    backgroundColor: "#E91E63", // Pink color from the image
    display: "flex",
    alignItems: "center",
    padding: "0 40px",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1",
  },
  logoTextKonnichi: {
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
  },
  logoTextWow: {
    color: "white",
    fontSize: "18px",
    fontWeight: "black",
  },
  content: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    backgroundColor: "white",
    padding: "50px 80px",
    borderRadius: "30px",
    boxShadow: "10px 10px 0px rgba(0, 0, 0, 1)", // Black hard shadow from the image
    border: "2px solid black",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "40px",
    color: "#000",
  },
  buttonGrid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  levelButton: {
    width: "100px",
    height: "140px",
    backgroundColor: "#E91E63",
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
    border: "2px solid black",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
  },
};