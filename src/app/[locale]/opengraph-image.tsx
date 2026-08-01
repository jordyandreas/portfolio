import { ImageResponse } from "next/og";

import {
  getProfileImageDataUrl,
  socialImageContentType,
  socialImageSize,
  renderSocialImage,
} from "@/app/social-image";
import { getLocalizedSiteCopy } from "@/config/site";
import { defaultLocale, isLocale } from "@/i18n/config";

export const size = socialImageSize;
export const contentType = socialImageContentType;

type ImageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateImageMetadata({ params }: ImageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const copy = getLocalizedSiteCopy(locale);

  return [
    {
      id: locale,
      alt: copy.socialImageAlt,
      size,
      contentType,
    },
  ];
}

export default async function OpenGraphImage({ params }: ImageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const profileImageSrc = await getProfileImageDataUrl();

  return new ImageResponse(
    renderSocialImage({ profileImageSrc, locale }),
    {
      ...size,
    },
  );
}
