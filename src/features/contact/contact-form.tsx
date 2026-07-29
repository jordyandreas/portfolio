"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

import { focusRingClassName } from "@/components/motion/interaction";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { contactContent } from "@/data/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact/schema";
import { buildWhatsAppHref } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const fieldLabelClassName =
  "text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase";

const fieldControlClassName = cn(
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70",
  "transition-[border-color,box-shadow,background-color] duration-200",
  "hover:border-foreground/20 hover:bg-surface-elevated/60",
  "focus-visible:border-foreground/25 focus-visible:bg-background focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-50",
);

const fieldErrorClassName = "text-xs text-destructive";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    const href = buildWhatsAppHref(siteConfig.whatsapp, values);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const { form } = contactContent;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      aria-label="Contact form"
    >
      <div className="space-y-2">
        <label htmlFor="contact-name" className={fieldLabelClassName}>
          {form.nameLabel}
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder={form.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={cn(fieldControlClassName, focusRingClassName)}
          {...register("name")}
        />
        {errors.name ? (
          <p id="contact-name-error" role="alert" className={fieldErrorClassName}>
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className={fieldLabelClassName}>
          {form.emailLabel}
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder={form.emailPlaceholder}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={cn(fieldControlClassName, focusRingClassName)}
          {...register("email")}
        />
        {errors.email ? (
          <p id="contact-email-error" role="alert" className={fieldErrorClassName}>
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-subject" className={fieldLabelClassName}>
          {form.subjectLabel}
        </label>
        <input
          id="contact-subject"
          type="text"
          autoComplete="off"
          placeholder={form.subjectPlaceholder}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          className={cn(fieldControlClassName, focusRingClassName)}
          {...register("subject")}
        />
        {errors.subject ? (
          <p
            id="contact-subject-error"
            role="alert"
            className={fieldErrorClassName}
          >
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className={fieldLabelClassName}>
          {form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder={form.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={cn(
            fieldControlClassName,
            focusRingClassName,
            "min-h-32 resize-y",
          )}
          {...register("message")}
        />
        {errors.message ? (
          <p
            id="contact-message-error"
            role="alert"
            className={fieldErrorClassName}
          >
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-3 pt-1">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-12 w-full rounded-xl text-sm font-medium sm:h-12"
        >
          {form.submitLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
        <p className="text-center text-xs leading-5 text-muted-foreground">
          {form.submitHint}
        </p>
      </div>
    </form>
  );
}
