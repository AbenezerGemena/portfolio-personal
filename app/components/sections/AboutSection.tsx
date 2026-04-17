"use client";

import { motion } from "framer-motion";
import Section, { SectionHeading } from "../Section";

const highlights = [
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Building production-ready Flutter apps for Android and iOS with clean architectures and real-world deployments on the Play Store and App Store.",
  },
  {
    icon: "🌐",
    title: "Fullstack Engineering",
    desc: "Designing and shipping end-to-end systems with React, Next.js on the frontend and Node.js, Express, and Laravel on the backend.",
  },
  {
    icon: "⚡",
    title: "Real-World Systems",
    desc: "Delivered ride-hailing platforms, e-commerce systems, and academic management tools—each with a focus on scalability and performance.",
  },
  {
    icon: "🏗️",
    title: "Clean Architecture",
    desc: "Strong believer in separation of concerns, SOLID principles, and building systems that are easy to maintain and extend over time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function AboutSection() {
  return (
    <Section id="about" alt>
      <SectionHeading
        title="About Me"
        subtitle="A bit about who I am and what I do"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left: text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
              marginBottom: "1.25rem",
              marginTop: 0,
            }}
          >
            I&apos;m{" "}
            <strong style={{ color: "var(--text)" }}>Abenezer Gemena</strong>,
            a Mobile App &amp; Fullstack Developer based in{" "}
            <strong style={{ color: "var(--text)" }}>Addis Ababa, Ethiopia</strong>.
            I specialize in building high-quality mobile and web applications
            that solve real problems.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
              marginBottom: "1.25rem",
              marginTop: 0,
            }}
          >

            I have experience developing real-world systems such as ride-hailing, e-commerce, and scooter rental platforms, with a focus on performance, real-time features, and user experience.

            I am adaptable, quick to learn new technologies, and work effectively both independently and as part of a team. I focus on writing clean, maintainable code and delivering reliable, scalable solutions.
          </p>
          {/* <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
              margin: 0,
            }}
          >
            I care about writing clean, maintainable code and building systems
            that scale. Whether it&apos;s a Flutter mobile app or a Node.js
            backend, I approach every project with the same rigor and attention
            to detail.
          </p> */}
        </motion.div>

        {/* Right: highlight cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
          className="highlights-grid"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "12px",
                padding: "1.25rem",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              whileHover={{ y: -3 }}
            >
              <div
                style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  margin: "0 0 0.4rem 0",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .highlights-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
