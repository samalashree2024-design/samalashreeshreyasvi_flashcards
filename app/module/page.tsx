"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function VocabularyPage() {
  const router = useRouter();

  const modules = [
    { id: 1, name: "Module Name", description: "Module Description" },
    { id: 2, name: "Module Name", description: "Module Description" },
    { id: 3, name: "Module Name", description: "Module Description" },
    { id: 4, name: "Module Name", description: "Module Description" },
    { id: 5, name: "Module Name", description: "Module Description" },
    { id: 6, name: "Module Name", description: "Module Description" },
  ];

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <span style={styles.logoTextKonnichi}>KONNICHI</span>
          <span style={styles.logoTextWow}>WOW</span>
        </div>
        <button style={styles.logoutBtn} onClick={() => router.push("/login")}>
           Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.backLink} onClick={() => router.push("/deck")}>
            <span style={{ fontSize: "18px" }}>←</span> Back to Lesson
          </div>

          <h1 style={styles.title}>Select Module</h1>
          
          <div style={styles.moduleGrid}>
            {modules.map((mod) => (
              <button 
                key={mod.id}
                style={styles.moduleOption}
                onClick={() => console.log(`Selected ${mod.name} ${mod.id}`)}
                // Animation Logic
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "translate(4px, 4px)";
                  e.currentTarget.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 1)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "6px 6px 0px rgba(0, 0, 0, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "6px 6px 0px rgba(0, 0, 0, 1)";
                }}
              >
                <div style={styles.textWrapper}>
                  <h3 style={styles.moduleName}>{mod.name}</h3>
                  <p style={styles.moduleDesc}>{mod.description}</p>
                </div>
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
    backgroundColor: "#F3F4F6",
    fontFamily: "sans-serif",
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
  },
  mainContent: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: "40px 50px",
    borderRadius: "32px",
    border: "3px solid black",
    boxShadow: "12px 12px 0px rgba(0, 0, 0, 1)",
    width: "95%",
    maxWidth: "1000px",
  },
  backLink: {
    color: "#E91E63",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    cursor: "pointer",
    display: "inline-block",
  },
  title: {
    fontSize: "40px",
    fontWeight: "900",
    marginBottom: "30px",
    color: "#000",
  },
  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  moduleOption: {
    height: "200px",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "20px",
    cursor: "pointer",
    boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)",
    transition: "transform 0.05s, box-shadow 0.05s",
    textAlign: "left",
    outline: "none",
  },
  textWrapper: { pointerEvents: "none" },
  moduleName: {
    fontSize: "20px",
    fontWeight: "800",
    margin: "0 0 5px 0",
    color: "#000",
  },
  moduleDesc: {
    fontSize: "14px",
    margin: 0,
    color: "#666",
  },
};