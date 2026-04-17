"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiCheckCircle } from "react-icons/fi";
import Section, { SectionHeading } from "../Section";

const highlights = [
  "Built and shipped Utopia ETaxi passenger and driver apps to the Google Play Store and Apple App Store",
  "Built Ride sharing from scratch",
  " Ozai Scooter rental mobile app enabling users to find nearby scooters, unlock via QR code, and manage rides in real time for convenient urban mobility.",
  "Implemented real-time GPS tracking, dynamic fare calculation, and push notification systems",
  "Diagnosed and resolved production issues, improving app crash rates and overall performance",
  "Collaborated with cross-functional teams to deliver features on schedule",
  "Set up CI/CD pipelines and maintained deployment workflows for mobile builds",
];

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Where I've worked and what I've done"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: "16px",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            backgroundColor: "var(--accent)",
            borderRadius: "4px 0 0 4px",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1.25rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text)",
                margin: "0 0 0.25rem 0",
              }}
            >
              Mobile App &amp; Fullstack Developer
            </h3>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--accent)",
                margin: 0,
              }}
            >
              Afroel Technology and  Ozone Technology
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.3rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              <FiCalendar size={13} />
              2023 — Present
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              <FiMapPin size={13} />
              Addis Ababa, Ethiopia
            </span>
          </div>
        </div>

        {/* Highlights */}
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {highlights.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                marginBottom: "0.75rem",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
              }}
            >
              <FiCheckCircle
                size={15}
                style={{
                  color: "var(--accent)",
                  flexShrink: 0,
                  marginTop: "3px",
                }}
              />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Tech used */}
        <div
          style={{
            marginTop: "1.25rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {[
            "Flutter",
            "Firebase",
            "Node.js",
            "React",
            "PostgreSQL",
            "Docker",
            "GitHub Actions",
          ].map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                padding: "0.2rem 0.6rem",
                borderRadius: "5px",
                backgroundColor: "var(--surface)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
