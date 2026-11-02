import { company } from "@/data/company"

export type EnquiryPayload = {
  name: string
  phone: string
  email: string
  companyName?: string
  message: string
}

type EnquiryResult =
  | { ok: true }
  | { ok: false; error: string }

const ENQUIRY_INBOX = "grsequipments2023@gmail.com"

/** Sends enquiry to GRS inbox via FormSubmit (no backend required). */
export async function sendEnquiry(values: EnquiryPayload): Promise<EnquiryResult> {
  const to = ENQUIRY_INBOX

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        phone: values.phone,
        email: values.email,
        company: values.companyName || "—",
        message: values.message,
        _subject: `GRS Enquiry — ${values.name}${values.companyName ? ` (${values.companyName})` : ""}`,
        _template: "table",
        _captcha: "false",
        _replyto: values.email,
      }),
    })

    if (!response.ok) {
      return { ok: false, error: "Could not send enquiry. Please try again or call us." }
    }

    const data = (await response.json()) as { success?: string | boolean; message?: string }
    if (data.success === false) {
      return { ok: false, error: data.message || "Could not send enquiry. Please call us." }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: "Network error. Please call +91 " + company.phones[0] + " or email " + to }
  }
}
