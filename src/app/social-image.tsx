import { siteConfig, siteSocialImage, siteTitle } from "@/config/site";

export const socialImageSize = {
  width: siteSocialImage.width,
  height: siteSocialImage.height,
} as const;

export const socialImageContentType = "image/png";

export function renderSocialImage() {
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
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "32px",
          padding: "56px",
          background: "linear-gradient(180deg, rgba(248,248,248,0.08), rgba(255,255,255,0.02))",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
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
                fontSize: 66,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              {siteTitle}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              {siteConfig.description}
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
            <div style={{ display: "flex" }}>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
