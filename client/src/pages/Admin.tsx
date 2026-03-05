import { useState, useEffect } from "react";
import { Link } from "wouter";

interface Submission {
  id: number;
  programName: string;
  bestFor: string;
  submitterName: string;
  submitterEmail: string;
  createdAt: string;
}

const hs = { fontFamily: "'DM Sans', sans-serif" };

export default function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [programCount, setProgramCount] = useState(0);

  useEffect(() => {
    Promise.all([
      fetch("/api/submissions").then(r => r.json()),
      fetch("/api/programs/count").then(r => r.json()),
    ]).then(([subs, countData]) => {
      setSubmissions(subs);
      setProgramCount(countData.count);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f7f5f0", ...hs }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header
        style={{
          background: "#1a3a0a",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "3px solid #c5a55a",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, margin: 0 }}>
          Admin Dashboard
        </h1>
        <Link href="/">
          <span
            data-testid="link-back-home"
            style={{
              color: "#c5a55a",
              fontSize: "0.78rem",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Back to Site
          </span>
        </Link>
      </header>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "24px 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            data-testid="stat-programs"
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "16px",
              border: "1px solid #e5e0d5",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1a3a0a" }}>
              {programCount}
            </div>
            <div style={{ fontSize: "0.72rem", color: "#666", fontWeight: 600 }}>
              Programs in Database
            </div>
          </div>
          <div
            data-testid="stat-submissions"
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "16px",
              border: "1px solid #e5e0d5",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#c5a55a" }}>
              {submissions.length}
            </div>
            <div style={{ fontSize: "0.72rem", color: "#666", fontWeight: 600 }}>
              Pending Submissions
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "16px",
              border: "1px solid #e5e0d5",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#2e86ab" }}>
              {programCount + submissions.length}
            </div>
            <div style={{ fontSize: "0.72rem", color: "#666", fontWeight: 600 }}>
              Total (incl. Pending)
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#1a3a0a",
            marginBottom: "12px",
            borderBottom: "2px solid #c5a55a",
            paddingBottom: "6px",
          }}
        >
          Program Submissions
        </h2>

        {loading ? (
          <p style={{ color: "#666", fontSize: "0.82rem" }}>Loading submissions...</p>
        ) : submissions.length === 0 ? (
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "32px",
              textAlign: "center",
              border: "1px solid #e5e0d5",
            }}
          >
            <p style={{ fontSize: "0.88rem", color: "#666", margin: 0 }}>
              No submissions yet. When users submit new programs through the Navigator,
              they'll appear here for review.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {submissions.map((s) => (
              <div
                key={s.id}
                data-testid={`card-submission-${s.id}`}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "16px 18px",
                  border: "1px solid #e5e0d5",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#1a3a0a",
                      margin: 0,
                    }}
                  >
                    {s.programName}
                  </h3>
                  <span
                    style={{
                      background: "#fff3e0",
                      color: "#8c5a1a",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Pending Review
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#444",
                    lineHeight: "1.5",
                    margin: "0 0 10px",
                  }}
                >
                  {s.bestFor}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    fontSize: "0.7rem",
                    color: "#888",
                    borderTop: "1px solid #f0ebe3",
                    paddingTop: "8px",
                  }}
                >
                  <span>
                    Submitted by: <strong style={{ color: "#555" }}>{s.submitterName}</strong>
                  </span>
                  <span>
                    Email:{" "}
                    <a
                      href={`mailto:${s.submitterEmail}`}
                      style={{ color: "#2e86ab", textDecoration: "none" }}
                    >
                      {s.submitterEmail}
                    </a>
                  </span>
                  <span>
                    {new Date(s.createdAt).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
