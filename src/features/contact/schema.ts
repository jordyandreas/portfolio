import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email."),
  subject: z
    .string()
    .trim()
    .min(2, "Please add a short subject.")
    .max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more about the project.")
    .max(2000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
