import { ImageResponse } from "next/og";

export const alt = "Pedro Silva | Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const techs = ["Node.js", "TypeScript", "Python", "NestJS", "Next.js"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #0f172a 60%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#60a5fa",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Desenvolvedor Full Stack
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 28,
            background: "linear-gradient(90deg, #ffffff, #93c5fd)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Pedro Silva
        </div>

        <div
          style={{
            color: "#94a3b8",
            fontSize: 26,
            lineHeight: 1.6,
            maxWidth: 680,
            marginBottom: 48,
          }}
        >
          Especializado na construção de APIs robustas e escaláveis com Node.js e Python.
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {techs.map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#e2e8f0",
                padding: "8px 18px",
                borderRadius: 9999,
                fontSize: 18,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
