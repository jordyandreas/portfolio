import type { ContactFormValues } from "@/features/contact/schema";
import type { Dictionary } from "@/i18n/dictionaries";

export function buildWhatsAppHref(
  phone: string,
  values: ContactFormValues,
  copy: Dictionary["contact"]["whatsapp"],
): string {
  const digits = phone.replace(/\D/g, "");
  const text = [
    copy.greeting,
    "",
    `${copy.name}: ${values.name}`,
    `${copy.email}: ${values.email}`,
    `${copy.subject}: ${values.subject}`,
    "",
    values.message,
  ].join("\n");

  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
