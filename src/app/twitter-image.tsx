import { ImageResponse } from "next/og";

import {
  socialImageContentType,
  socialImageSize,
  renderSocialImage,
} from "@/app/social-image";
import { siteSocialImage } from "@/config/site";

export const alt = siteSocialImage.alt;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function TwitterImage() {
  return new ImageResponse(renderSocialImage(), {
    ...size,
  });
}
