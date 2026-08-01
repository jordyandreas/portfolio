import { z } from "zod";

import type { Dictionary } from "@/i18n/dictionaries";

export function createContactFormSchema(
  messages: Dictionary["contact"]["validation"],
) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(2, messages.nameRequired)
      .max(80, messages.nameTooLong),
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    subject: z
      .string()
      .trim()
      .min(2, messages.subjectRequired)
      .max(120, messages.subjectTooLong),
    message: z
      .string()
      .trim()
      .min(10, messages.messageRequired)
      .max(2000, messages.messageTooLong),
  });
}

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
