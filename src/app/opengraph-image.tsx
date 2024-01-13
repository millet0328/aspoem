import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "学习中国古诗词 - aspoem.com";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#171717",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: 148, color: "#e5e5e5" }}>学习中国古诗词</span>
        <span style={{ fontSize: 72, color: "#737373" }}>aspoem.com</span>
      </div>
    ),
    size,
  );
}
