import type { ContactFormValues } from "@/features/contact/schema";

export function buildWhatsAppHref(
  phone: string,
  values: ContactFormValues,
): string {
  const digits = phone.replace(/\D/g, "");
  const text = [
    `Hi Jordy — I'd like to get in touch.`,
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Subject: ${values.subject}`,
    "",
    values.message,
  ].join("\n");

  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
