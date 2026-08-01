import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { siteConfig, siteSocialImage } from "@/config/site";
import { heroContent } from "@/data/hero";

export const socialImageSize = {
  width: siteSocialImage.width,
  height: siteSocialImage.height,
} as const;

export const socialImageContentType = "image/png";

export async function getProfileImageDataUrl() {
  const profileImageBuffer = await readFile(
    join(process.cwd(), "public/profile/jordy-andreas-new.jpg"),
  );

  return `data:image/jpeg;base64,${profileImageBuffer.toString("base64")}`;
}

type RenderSocialImageProps = {
  profileImageSrc: string;
};

export function renderSocialImage({ profileImageSrc }: RenderSocialImageProps) {
  const { eyebrow, headline } = heroContent;
  const siteHost = siteConfig.url.replace(/^https?:\/\//, "");

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
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              fontSize: 22,
              color: "#7B7B7B",
            }}
          >
            <div style={{ display: "flex" }}>{siteConfig.email}</div>
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
            borderRadius: "9999px",
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
              borderRadius: "9999px",
              border: "1px solid rgba(34,34,34,0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "318px",
                height: "318px",
                borderRadius: "9999px",
                overflow: "hidden",
                border: "1px solid rgba(34,34,34,0.12)",
                background: "#F8F8F8",
                boxShadow: "0 24px 80px -48px rgba(34,34,34,0.35)",
              }}
            >
              <img
                src={profileImageSrc}
                alt={siteConfig.name}
                width="318"
                height="318"
                style={{
                  width: "318px",
                  height: "318px",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
