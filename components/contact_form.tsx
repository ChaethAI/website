"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/global/container";
import { ContactSubmitButton } from "@/components/contact_submit_button";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  request: string;
  plan: "shared" | "enterprise" | "";
}

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    request: "",
    plan: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string): boolean => {
    // No Gmail allowed, must have @ and proper domain
    if (email.toLowerCase().includes("@gmail.com")) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    // Validate required fields
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please use a business email (no Gmail allowed)";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.request.trim()) newErrors.request = "Request details are required";
    if (!formData.plan) newErrors.plan = "Please select a plan";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, handle submission
      console.log("Form submitted:", formData);
      // TODO: Add actual submission logic
    }
  };

  const inputClassName = "w-full px-3 py-2 border border-neutral-600 rounded-md bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <Container bg="darker" className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Dark content (text) */}
        <div className="flex items-center">
          <Card className="w-full border-0 bg-transparent shadow-none">
            <CardContent className="p-6 md:p-8">
              <span className="mb-3 inline-flex items-center rounded-md bg-white/20 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-white">
                Contact
              </span>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl text-white mb-4">
                Get Started with Chaeth AI
              </h2>
              <p className="text-neutral-300 mb-6">
                Ready to transform your enterprise with local-first AI? Connect with our team to discuss your specific needs and explore how Chaeth can accelerate your AI journey while keeping your data secure in Thailand.
              </p>
              <div className="space-y-3 text-sm text-neutral-400">
                <p>✓ Thai-hosted infrastructure for data residency compliance</p>
                <p>✓ Enterprise-grade security and privacy controls</p>
                <p>✓ Dedicated support and custom deployment options</p>
                <p>✓ PDPA-compliant data handling and audit trails</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Bright content (form) */}
        <div className="bg-white rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
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
              <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
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
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
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
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
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
              <label className="block text-sm font-medium text-neutral-700 mb-2">
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
                  <span className="text-sm text-neutral-700">Shared Plan</span>
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
                  <span className="text-sm text-neutral-700">Enterprise Plan</span>
                </label>
              </div>
              {errors.plan && <p className="mt-1 text-sm text-red-600">{errors.plan}</p>}
            </div>

            <div>
              <label htmlFor="request" className="block text-sm font-medium text-neutral-700 mb-2">
                Tell us about your needs *
              </label>
              <Textarea
                id="request"
                value={formData.request}
                onChange={(e) => handleInputChange("request", e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your use case, team size, and any specific requirements..."
                rows={4}
              />
              {errors.request && <p className="mt-1 text-sm text-red-600">{errors.request}</p>}
            </div>

            <ContactSubmitButton type="submit" className="w-full">
              Submit Request
            </ContactSubmitButton>
          </form>
        </div>
      </div>
    </Container>
  );
}
