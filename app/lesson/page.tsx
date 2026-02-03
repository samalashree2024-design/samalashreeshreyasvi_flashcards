"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LessonPage() {
  const router = useRouter();
  const lessons = Array.from({ length: 10 }, (_, i) => i + 1);

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
            <span style={{ fontSize: "18px" }}>←</span> Back to Deck
          </div>

          <h1 style={styles.title}>Select Lesson</h1>
          
          <div style={styles.lessonGrid}>
            {lessons.map((num) => (
              <button
                key={num}
                onClick={() => console.log(`Lesson ${num} clicked`)}
                style={styles.lessonButton}
                // Visual "Click" logic starts here
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
                {num}
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
    width: "100%",
    maxWidth: "900px",
  },
  backLink: {
    color: "#E91E63",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    cursor: "pointer",
  },
  title: {
    fontSize: "40px",
    fontWeight: "900",
    marginBottom: "30px",
    color: "#000",
  },
  lessonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
  },
  lessonButton: {
    height: "120px",
    backgroundColor: "#E91E63",
    color: "white",
    fontSize: "42px",
    fontWeight: "900",
    border: "3px solid black",
    borderRadius: "16px",
    cursor: "pointer",
    boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)", // The "depth" of the button
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.05s, box-shadow 0.05s", // Fast transition for a snappy feel
  },
};