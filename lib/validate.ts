// Small validation helpers kept simple and reusable

export function is_business_email(email: string): boolean {
  if (!email) return false;
  const lower = email.toLowerCase().trim();
  if (lower.endsWith("@gmail.com")) return false;
  const basic = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return basic.test(lower);
}

