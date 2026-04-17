"use client";

import { motion } from "framer-motion";
import Section, { SectionHeading } from "../Section";
import {
  SiFlutter,
  SiKotlin,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithubactions,
} from "react-icons/si";

const skillGroups = [
  {
    label: "Mobile",
    color: "#06b6d4",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    label: "Frontend",
    color: "#6366f1",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    color: "#10b981",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
    ],
  },
  {
    label: "Databases",
    color: "#f59e0b",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "Tools",
    color: "#ec4899",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Technologies I work with regularly"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: gi * 0.08 }}
          >
            {/* Group header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.875rem",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: group.color,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                }}
              >
                {group.label}
              </span>
            </div>

            {/* Skill chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
              {group.skills.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "8px",
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--text)",
                    cursor: "default",
                  }}
                >
                  <Icon
                    size={15}
                    style={{ color: group.color, flexShrink: 0 }}
                  />
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
