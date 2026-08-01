import { readFile } from "node:fs/promises";
import { join } from "node:path";

import {
  getLocalizedSiteCopy,
  getSiteTitle,
  siteConfig,
  siteSocialImage,
} from "@/config/site";
import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

export const socialImageSize = {
  width: siteSocialImage.width,
  height: siteSocialImage.height,
} as const;

export const socialImageContentType = "image/png";

export async function getProfileImageDataUrl() {
  const profileImageBuffer = await readFile(
    join(process.cwd(), "public/profile/jordy-andreas-new.jpg"),
  );

  return Uint8Array.from(profileImageBuffer).buffer;
}

type RenderSocialImageProps = {
  profileImageSrc: ArrayBuffer;
  locale?: Locale;
};

export function renderSocialImage({
  profileImageSrc,
  locale = defaultLocale,
}: RenderSocialImageProps) {
  const copy = getLocalizedSiteCopy(locale);
  const title = getSiteTitle(locale);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #222222 0%, #3a3a3a 55%, #7B7B7B 100%)",
        color: "white",
        padding: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          gap: "40px",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "32px",
          padding: "56px",
          background:
            "linear-gradient(180deg, rgba(248,248,248,0.08), rgba(255,255,255,0.02))",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 62,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 26,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              {copy.description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              fontSize: 24,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <div style={{ display: "flex" }}>{siteConfig.email}</div>
            <div style={{ display: "flex" }}>
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexShrink: 0,
            width: "280px",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profileImageSrc as unknown as string}
              alt={copy.socialImageAlt}
              width="280"
              height="406"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
