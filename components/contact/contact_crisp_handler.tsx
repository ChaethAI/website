"use client";

import type { ContactFormData } from "./contact_form";

// Type definition for Crisp SDK
interface CrispSDK {
  push: (args: [string, string, any[]?]) => void;
  is: (method: string) => boolean;
  get: (method: string, key?: string) => any;
}

/**
 * ContactCrispHandler
 * - Handles integration with Crisp chat SDK for form submissions
 * - Provides modular functions for setting user data, sending messages, and opening chatbox
 * - Includes logging for debugging purposes
 */
export function useContactCrispHandler() {
  const setUserDetails = (data: ContactFormData) => {
    try {
      if (data.email) {
        (globalThis as any).$crisp.push(["set", "user:email", [data.email]]);
        console.log(`[Crisp] Set user email: ${data.email}`);
      }
      if (data.phone) {
        (globalThis as any).$crisp.push(["set", "user:phone", [data.phone]]);
        console.log(`[Crisp] Set user phone: ${data.phone}`);
      }
      if (data.name) {
        (globalThis as any).$crisp.push(["set", "user:nickname", [data.name]]);
        console.log(`[Crisp] Set user nickname: ${data.name}`);
      }
      if (data.company) {
        (globalThis as any).$crisp.push(["set", "user:company", [data.company]]);
        console.log(`[Crisp] Set user company: ${data.company}`);
      }
    } catch (error) {
      console.error("[Crisp] Error setting user details:", error);
    }
  };

  const sendFormMessage = (data: ContactFormData) => {
    try {
      const message = `New Contact Request:\n- Name: ${data.name}\n- Company: ${data.company}\n- Email: ${data.email}\n- Phone: ${data.phone}\n- Plan: ${data.plan}\n- Request: ${data.request}`;
      (globalThis as any).$crisp.push(["do", "message:send", ["text", message]]);
      console.log(`[Crisp] Sent message: ${message}`);
    } catch (error) {
      console.error("[Crisp] Error sending message:", error);
    }
  };

  const openChatbox = () => {
    try {
      (globalThis as any).$crisp.push(["do", "chat:open"]);
      console.log("[Crisp] Opened chatbox");
    } catch (error) {
      console.error("[Crisp] Error opening chatbox:", error);
    }
  };

  const handleFormSubmission = (data: ContactFormData) => {
    console.log("[Crisp] Handling form submission:", data);
    setUserDetails(data);
    sendFormMessage(data);
    // Note: Chatbox will not open automatically on submission
  };

  return {
    setUserDetails,
    sendFormMessage,
    openChatbox,
    handleFormSubmission,
  };
}
