"use client";

import { FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg-secondary)",
        padding: "2rem 1.5rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0 }}>
          © {year}{" "}
          <span style={{ color: "var(--text)", fontWeight: 600 }}>
            Abenezer Gemena
          </span>

        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="https://github.com/AbenezerGemena"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              color: "var(--text-muted)",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            <FiGithub size={20} />
          </a>
          <a
            href="mailto:abenezergemena@gmail.com"
            aria-label="Email"
            style={{
              color: "var(--text-muted)",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
