"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      {/* 1. TRANSPARENT HEADER - Only contains the Logout button */}
      <div style={styles.header}>
        <div /> {/* Empty space where the logo used to be */}
        <button style={styles.logoutBtn} onClick={() => router.push("/login")}>
           Logout
        </button>
      </div>

      {/* 2. FULL SCREEN BACKGROUND IMAGE */}
      <div style={styles.imageBackground}>
        {/* 3. THE CLICKABLE BACK BUTTON */}
        <button
          onClick={() => router.back()}
          style={styles.hitbox}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateX(-50%) translateY(4px)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "translateX(-50%) translateY(0)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(-50%) translateY(0)";
          }}
        >
          Back
        </button>
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
    backgroundColor: "#4FD1C5", 
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "relative",
  },
  header: {
    height: "60px",
    backgroundColor: "transparent", 
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    position: "absolute", 
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  logoutBtn: {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "6px",
    padding: "6px 16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    backgroundImage: "url('/coming-soon.png')",
    backgroundSize: "100% 100%", // Occupies full screen sidewise
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  hitbox: {
    position: "absolute",
    bottom: "18%", 
    left: "50%",
    transform: "translateX(-50%)",
    width: "240px", 
    height: "225px",
    backgroundColor: "transparent", 
    border: "none",
    cursor: "pointer",
    color: "transparent", 
    outline: "none",
    zIndex: 110,
    transition: "transform 0.05s ease",
  },
};