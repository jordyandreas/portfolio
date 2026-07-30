import { ImageResponse } from "next/og";

import {
  getProfileImageDataUrl,
  socialImageContentType,
  socialImageSize,
  renderSocialImage,
} from "@/app/social-image";
import { siteSocialImage } from "@/config/site";

export const alt = siteSocialImage.alt;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function OpenGraphImage() {
  const profileImageSrc = await getProfileImageDataUrl();

  return new ImageResponse(renderSocialImage({ profileImageSrc }), {
    ...size,
  });
}
