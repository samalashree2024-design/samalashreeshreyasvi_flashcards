"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DeckPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      {/* 1. PINK HEADER BAR */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <span style={styles.logoTextKonnichi}>KONNICHI</span>
          <span style={styles.logoTextWow}>WOW</span>
        </div>
        <button style={styles.logoutBtn} onClick={() => router.push("/login")}>
           Logout
        </button>
      </div>

      {/* 2. MAIN CONTENT */}
      <div style={styles.mainContent}>
        <div style={styles.card}>
          {/* Back Navigation - Pointing to /level (singular) */}
          <div 
            style={styles.backLink} 
            onClick={() => router.push("/level")}
          >
            <span style={{ fontSize: "18px" }}>←</span> Back to Level
          </div>

          <h1 style={styles.title}>Select Deck</h1>
          
          <div style={styles.deckGrid}>
            {/* Vocabulary Deck */}
            <button 
              style={styles.deckOption}
              onClick={() => router.push("/module")} // or /vocabulary depending on your route
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translate(4px, 4px)";
                e.currentTarget.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 1)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 1)";
              }}
            >
              <span style={styles.deckLabel}>Vocabulary</span>
              <div style={styles.iconBox}>📖</div>
            </button>

            {/* Kanji Deck */}
            <button 
              style={styles.deckOption}
              onClick={() => router.push("/cmngsoon")}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translate(4px, 4px)";
                e.currentTarget.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 1)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "8px 8px 0px rgba(0, 0, 0, 1)";
              }}
            >
              <span style={styles.deckLabel}>Kanji</span>
              <div style={styles.kanjiText}>漢字</div>
            </button>
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
    fontFamily: "sans-serif",
    overflow: "hidden",
  },
  header: {
    height: "70px",
    backgroundColor: "#E91E63",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    zIndex: 100,
  },
  logoContainer: { display: "flex", flexDirection: "column", lineHeight: "1" },
  logoTextKonnichi: { color: "white", fontSize: "12px", fontWeight: "bold" },
  logoTextWow: { color: "white", fontSize: "24px", fontWeight: "900" },
  logoutBtn: {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "6px",
    padding: "6px 16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: "50px 60px",
    borderRadius: "32px",
    border: "3px solid black",
    boxShadow: "12px 12px 0px rgba(0, 0, 0, 1)",
    width: "90%",
    maxWidth: "900px",
  },
  backLink: {
    color: "#E91E63",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "15px",
    cursor: "pointer",
    display: "inline-block",
  },
  title: {
    fontSize: "44px",
    fontWeight: "900",
    marginBottom: "40px",
    color: "#000",
    textAlign: "left",
  },
  deckGrid: {
    display: "flex",
    gap: "30px",
  },
  deckOption: {
    flex: 1,
    height: "200px",
    backgroundColor: "white",
    border: "3px solid black",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    cursor: "pointer",
    boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)",
    transition: "transform 0.05s, box-shadow 0.05s",
    outline: "none",
  },
  deckLabel: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#000",
  },
  iconBox: {
    fontSize: "60px",
  },
  kanjiText: {
    fontSize: "60px",
    color: "#74ADE1",
    fontWeight: "bold",
  },
};