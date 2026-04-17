"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiGithub } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 1.5rem",
        backgroundColor: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient gradient blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "1.5rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--accent)",
              backgroundColor: "var(--accent-light)",
              padding: "0.3rem 0.8rem",
              borderRadius: "999px",
              border: "1px solid rgba(99,102,241,0.3)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "var(--text)",
            margin: "0 0 0.5rem 0",
          }}
        >
          Abenezer{" "}
          <span style={{ color: "var(--accent)" }}>Gemena</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontWeight: 500,
            color: "var(--text-muted)",
            margin: "0 0 1.5rem 0",
            letterSpacing: "-0.01em",
          }}
        >
          Mobile App &amp; Fullstack Developer
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: "0 0 2.5rem 0",
          }}
        >
          I build scalable mobile and web applications using Flutter, Node.js,
          and modern web technologies. Based in{" "}
          <span style={{ color: "var(--text)" }}>Addis Ababa, Ethiopia</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--accent)",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
              transition: "background-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--accent-hover)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            View Projects <FiArrowRight size={16} />
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "transparent",
              color: "var(--text)",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Contact Me <FiMail size={16} />
          </a>
          <a
            href="https://github.com/AbenezerGemena"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "transparent",
              color: "var(--text-muted)",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: "0.9375rem",
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
            }}
          >
            <FiGithub size={18} />
            GitHub
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
