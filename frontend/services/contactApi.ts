import type { ContactRequest, ContactResponse } from "@/types/contact";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

export class ContactApiError extends Error {
  constructor(message: string, public readonly fieldErrors: Record<string, string> = {}) { super(message); }
}

export async function submitContactRequest(request: ContactRequest): Promise<ContactResponse> {
  const response = await fetch(`${API_BASE_URL}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(request) });
  const payload = await response.json().catch(() => null) as { message?: string; fieldErrors?: Record<string, string> } | ContactResponse | null;
  if (!response.ok) {
    const error = payload as { message?: string; fieldErrors?: Record<string, string> } | null;
    throw new ContactApiError(error?.message ?? "We could not send your request. Please try again.", error?.fieldErrors);
  }
  return payload as ContactResponse;
}
