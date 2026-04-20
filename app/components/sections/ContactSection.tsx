"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import Section, { SectionHeading } from "../Section";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "abenezergemena@gmail.com",
    href: "mailto:abenezergemena@gmail.com",
    color: "#6366f1",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/AbenezerGemena",
    href: "https://github.com/AbenezerGemena",
    color: "#94a3b8",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/abenezer-g-438861403",
    color: "#94a3b8",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: undefined,
    color: "#10b981",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:abenezergemena@gmail.com?subject=${subject}&body=${body}`
    );
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 1rem",
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    color: "var(--text)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <Section id="contact" alt>
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or want to chat? I'm open to new opportunities."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              margin: "0 0 0.5rem 0",
            }}
          >
            I&apos;m currently open to freelance and full-time opportunities.
            Whether you have a question or just want to say hi, I&apos;ll get
            back to you as soon as possible!
          </p>

          {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                padding: "1rem",
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: `${color}1a`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={16} style={{ color }} />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--text)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = color)
                    }
                    onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text)")
                    }
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    style={{
                      margin: 0,
                      color: "var(--text)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right: contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "16px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  marginBottom: "0.4rem",
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                style={inputStyle}
                onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  "var(--accent)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "var(--border)")
                }
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  marginBottom: "0.4rem",
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  "var(--accent)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "var(--border)")
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              style={{
                display: "block",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                marginBottom: "0.4rem",
              }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or inquiry..."
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--border)")
              }
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              backgroundColor: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.8rem 1.5rem",
              fontSize: "0.9375rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor =
              "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor =
              "var(--accent)")
            }
          >
            <FiSend size={16} />
            Send Message
          </motion.button>
        </motion.form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
