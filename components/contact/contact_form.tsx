"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ContactSubmitButton } from "@/components/contact/contact_submit_button";
import { is_business_email } from "@/lib/validate";
import { useContactCrispHandler } from "./contact_crisp_handler";

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
  onReset?: () => void;
}

export function ContactForm({ className = "", compact = false, onSubmitSuccess, onReset }: ContactFormProps) {
  const { handleFormSubmission } = useContactCrispHandler();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    request: "",
    plan: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      request: "",
      plan: "",
    });
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(false);
    onReset?.();
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev: ContactFormData) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev: Record<string, string>) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      setIsSubmitting(true);

      try {
        // TODO: wire to backend action / API route
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        onSubmitSuccess?.(formData);
        setIsSubmitted(true);

        // Integrate with Crisp chat
        handleFormSubmission(formData);
      } catch (error) {
        // Handle error state here if needed
      } finally {
        setIsSubmitting(false);
      }
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

  // Success state - check this FIRST
  if (isSubmitted) {
    return (
      <div className={["space-y-4 text-center", className].filter(Boolean).join(" ")}>

        <div className="w-16 h-16 mx-auto bg-success rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Thank you for your interest!</h3>
        <p className="text-neutral-300">
          We've received your request and will be in touch within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  // Form state
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

      <ContactSubmitButton
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
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
