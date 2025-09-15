"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ContactSubmitButton } from "@/components/contact/contact_submit_button";
import { is_business_email } from "@/lib/validate";

// If you keep everything in this file (no contact_form_inner), the component below defines the form itself.
// I included the full form implementation below so you can drop this file in as-is.

/* ------------- ContactForm (core, named export) ------------- */

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  request: string;
  plan: "shared" | "enterprise" | "";
}

interface ContactFormProps {
  className?: string;
  compact?: boolean; // smaller paddings for sidebar usage
  onSubmitSuccess?: (data: ContactFormData) => void;
}

export function ContactForm({ className = "", compact = false, onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    request: "",
    plan: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev: ContactFormData) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev: Record<string, string>) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!is_business_email(formData.email)) {
      newErrors.email = "Please use a business email (no Gmail allowed)";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.request.trim()) newErrors.request = "Request details are required";
    if (!formData.plan) newErrors.plan = "Please select a plan";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      onSubmitSuccess?.(formData);
      // TODO: wire to backend action / API route
    }
  };

  const inputClassName = [
    "w-full px-3 py-2 border rounded-md",
    "bg-neutral-800 text-white placeholder-neutral-400",
    "border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    compact ? "text-sm py-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form onSubmit={handleSubmit} className={["space-y-6", className].filter(Boolean).join(" ")}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className={inputClassName}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className={inputClassName}
          placeholder="Your company name"
        />
        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={inputClassName}
          placeholder="your.email@company.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className={inputClassName}
          placeholder="+66 XX XXX XXXX"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Interested in *
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="plan"
              value="shared"
              checked={formData.plan === "shared"}
              onChange={(e) => handleInputChange("plan", e.target.value as "shared")}
              className="mr-2"
            />
            <span className="text-sm text-white">Shared Plan</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="plan"
              value="enterprise"
              checked={formData.plan === "enterprise"}
              onChange={(e) => handleInputChange("plan", e.target.value as "enterprise")}
              className="mr-2"
            />
            <span className="text-sm text-white">Enterprise Plan</span>
          </label>
        </div>
        {errors.plan && <p className="mt-1 text-sm text-red-600">{errors.plan}</p>}
      </div>

      <div>
        <label htmlFor="request" className="block text-sm font-medium text-white mb-2">
          Tell us about your needs *
        </label>
        <Textarea
          id="request"
          value={formData.request}
          onChange={(e) => handleInputChange("request", e.target.value)}
          className="w-full px-3 py-2 border border-neutral-600 rounded-md bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Describe your use case, team size, and any specific requirements..."
          rows={compact ? 3 : 4}
        />
        {errors.request && <p className="mt-1 text-sm text-red-600">{errors.request}</p>}
      </div>

      <ContactSubmitButton type="submit" className="w-full">
        Submit Request
      </ContactSubmitButton>
    </form>
  );
}

/* ------------- ContactFormCard (wrapper) ------------- */

/**
 * ContactFormCard
 * - Exportable right-side card wrapper around ContactForm
 * - Rounding logic matches the left card so inner edges are square
 * - Accepts same className + compact props forwarded to ContactForm
 */
export function ContactFormCard({
  className = "",
  compact = false,
  onSubmitSuccess,
}: {
  className?: string;
  compact?: boolean;
  onSubmitSuccess?: (data: ContactFormData) => void;
}) {
  return (
    <div
      className={[
        "p-6 md:p-10 bg-neutral-900 backdrop-blur-sm border border-white/6 shadow-xl",
        // square corners on all screens
        className,
      ].filter(Boolean).join(" ")}
    >
      <ContactForm className="mt-0" compact={compact} onSubmitSuccess={onSubmitSuccess} />
    </div>
  );
}
