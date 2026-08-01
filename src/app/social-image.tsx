import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { siteConfig, siteSocialImage } from "@/config/site";
import { heroContent } from "@/data/hero";

export const socialImageSize = {
  width: siteSocialImage.width,
  height: siteSocialImage.height,
} as const;

export const socialImageContentType = "image/png";

const PORTRAIT_SIZE = 318;

const GLOBE_ICON_SRC = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
)}`;

/** Pre-clipped circular portrait (transparent corners) for reliable OG rendering. */
export async function getProfileImageDataUrl() {
  const profileImageBuffer = await readFile(
    join(process.cwd(), "public/profile/jordy-andreas-og.png"),
  );

  return `data:image/png;base64,${profileImageBuffer.toString("base64")}`;
}

type RenderSocialImageProps = {
  profileImageSrc: string;
};

export function renderSocialImage({ profileImageSrc }: RenderSocialImageProps) {
  const { eyebrow, headline } = heroContent;
  const siteHost = siteConfig.url.replace(/^https?:\/\//, "");
  const skills = siteConfig.techStack.slice(0, 5);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(160deg, #FFFFFF 0%, #F8F8F8 55%, #EEEEEE 100%)",
        color: "#222222",
        padding: "56px 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            height: "100%",
            maxWidth: "680px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 56,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.045em",
                color: "#222222",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#7B7B7B",
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.35,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#222222",
                maxWidth: "620px",
              }}
            >
              {headline}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "8px",
                maxWidth: "620px",
              }}
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(34,34,34,0.12)",
                    borderRadius: "9999px",
                    padding: "8px 16px",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#7B7B7B",
                    background: "rgba(255,255,255,0.7)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: 22,
              color: "#7B7B7B",
            }}
          >
            <img
              src={GLOBE_ICON_SRC}
              alt=""
              width="22"
              height="22"
              style={{ width: "22px", height: "22px" }}
            />
            <div style={{ display: "flex" }}>{siteHost}</div>
          </div>
        </div>

        {/* Hero-matching circular portrait with concentric rings */}
        <div
          style={{
            display: "flex",
            flexShrink: 0,
            width: "420px",
            height: "420px",
            borderRadius: "210px",
            border: "1px solid rgba(34,34,34,0.12)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "360px",
              height: "360px",
              borderRadius: "180px",
              border: "1px solid rgba(34,34,34,0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: `${PORTRAIT_SIZE}px`,
                height: `${PORTRAIT_SIZE}px`,
                borderRadius: `${PORTRAIT_SIZE / 2}px`,
                border: "1px solid rgba(34,34,34,0.12)",
                boxShadow: "0 24px 80px -48px rgba(34,34,34,0.35)",
                overflow: "hidden",
              }}
            >
              <img
                src={profileImageSrc}
                alt={siteConfig.name}
                width={PORTRAIT_SIZE}
                height={PORTRAIT_SIZE}
                style={{
                  width: `${PORTRAIT_SIZE}px`,
                  height: `${PORTRAIT_SIZE}px`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
