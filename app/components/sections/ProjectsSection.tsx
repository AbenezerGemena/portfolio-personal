"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section, { SectionHeading } from "../Section";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  store?: string;
  storeLabel?: string;
}

const projects: Project[] = [
  {
    title: "Utopia ETaxi — Passenger App",
    description:
      "Real-time ride-hailing application for passengers. Features live GPS tracking of nearby drivers, fare estimation, trip history, and in-app payment. Built for production deployment.",
    tech: ["Flutter", "Firebase", "Google Maps", "Laravel"],
    //github: "https://github.com/AbenezerGemena",
    store: "https://play.google.com/store/apps/details?id=com.utopia.passenger",
    storeLabel: "Play Store",
  },
  {
    title: "Utopia ETaxi Driver ",
    description:
      "Companion driver app for the Utopia ETaxi platform. Handles ride acceptance, turn-by-turn navigation, earnings tracking, and trip state management in real time.",
    tech: ["Flutter", "Firebase", "Google Maps", "Laravel"],
    store: "https://play.google.com/store/apps/details?id=com.utopia.driver",
    storeLabel: "Play Store",
  },
  {
    title: "Ozai",
    description:
      "Built and published a scooter rental mobile application that enables users to locate nearby scooters, unlock them via QR code, and start rides instantly. Implemented core features including real-time scooter discovery, ride initiation, trip tracking, and seamless user experience for urban mobility.",
    tech: ["Flutter", "Firebase", "Google Maps", "Node.js"],
    store: "https://play.google.com/store/apps/details?id=com.caai.ozai",
    storeLabel: "Play Store",
  },
  {
    title: "LLM Chatbot App",
    description:
      "Flutter mobile app integrated with the Gemini API and a custom Node.js backend. Supports multi-turn conversations, streaming responses, and session persistence.",
    tech: ["Flutter", "Gemini API", "Node.js", "Firebase"],
    github: "https://github.com/AbenezerGemena/chatbot",
  },
  {
    title: "Shoe E-Commerce App",
    description:
      "Full-featured e-commerce application for footwear. Includes user authentication, product browsing, cart, checkout flow, order tracking, and admin product management.",
    tech: ["Flutter", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/AbenezerGemena/Shoes-Ecommerce",
  },
  {
    title: "Postgraduate Management System",
    description:
      "Role-based web platform for postgraduate program administration. Supports student, advisor, and admin roles with thesis submission tracking and grade management.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/AbenezerGemena/pg-admission",
  },
];

const techColors: Record<string, string> = {
  Flutter: "#06b6d4",
  Firebase: "#f59e0b",
  "Google Maps": "#10b981",
  "Node.js": "#22c55e",
  "Gemini API": "#8b5cf6",
  Express: "#94a3b8",
  PostgreSQL: "#3b82f6",
  MySQL: "#f97316",
  React: "#61dafb",
};

export default function ProjectsSection() {
  return (
    <Section id="projects" alt>
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've built"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "border-color 0.2s, box-shadow 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 24px rgba(99,102,241,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--card-border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text)",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                margin: 0,
                flexGrow: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tech badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "0.2rem 0.55rem",
                    borderRadius: "4px",
                    backgroundColor: "var(--surface)",
                    color: techColors[t] ?? "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--text)")
                  }
                  onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--text-muted)")
                  }
                >
                  <FiGithub size={14} /> GitHub
                </a>
              )}
              {project.store && (
                <a
                  href={project.store}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--accent)",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.8")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                >
                  <FiExternalLink size={14} /> {project.storeLabel}
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
