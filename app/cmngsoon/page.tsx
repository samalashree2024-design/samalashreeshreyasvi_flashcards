"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      {/* 1. PINK HEADER BAR - Logo removed to stop double-text */}
      <div style={styles.header} />

      {/* 2. MAIN CONTENT AREA */}
      <div style={styles.contentArea}>
        <div style={styles.imageContainer}>
          {/* Your PNG from the public folder */}
          <img 
            src="/coming-soon.png" 
            alt="Coming Soon" 
            style={styles.mainImage} 
          />
          
          {/* 3. THE CLICKABLE HITBOX */}
          {/* This sits perfectly over the 'Back' button in your picture */}
          <button
            onClick={() => router.back()}
            style={styles.hitbox}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateX(-50%) scale(0.96)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateX(-50%) scale(1)";
            }}
          >
            Back
          </button>
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
    backgroundColor: "#4FD1C5", // Teal green to match image
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  header: {
    height: "60px",
    backgroundColor: "#E91E63", // Pink bar
    width: "100%",
    zIndex: 10,
  },
  contentArea: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    height: "75%", 
    display: "flex",
    justifyContent: "center",
  },
  mainImage: {
    height: "80%",
    width: "auto",
    objectFit: "contain",
  },
  hitbox: {
    position: "absolute",
    bottom: "34%", // Locked to the 'Back' button in your PNG
    left: "50%",
    transform: "translateX(-50%)",
    width: "200px", 
    height: "55px",
    backgroundColor: "transparent", // Invisible so the image button shows
    border: "none",
    cursor: "pointer",
    color: "transparent", // Hides the word 'Back'
    outline: "none",
    zIndex: 40,
    transition: "transform 0.1s ease",
  },
};