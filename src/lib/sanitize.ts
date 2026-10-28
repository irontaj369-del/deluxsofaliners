/**
 * Client-side input sanitization and XSS protection utilities.
 * Strips dangerous HTML tags, malicious attributes, and unwanted control characters
 * before form persistence or submission.
 */

// Regex to detect and remove HTML tags
const HTML_TAG_REGEX = /<[^>]*>?/gm;

// Characters commonly exploited in XSS attacks
const DANGEROUS_CHARS_REGEX = /[<>"'`]/g;

const CHAR_REPLACEMENTS: Record<string, string> = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
};

/**
 * Strips HTML tags and escapes dangerous characters to prevent XSS.
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  if (!input || typeof input !== 'string') return '';
  
  // 1. Strip raw HTML tags
  const withoutTags = input.replace(HTML_TAG_REGEX, '');
  
  // 2. Escape any remaining dangerous delimiter characters
  const escaped = withoutTags.replace(DANGEROUS_CHARS_REGEX, (char) => CHAR_REPLACEMENTS[char] || '');
  
  // 3. Normalize multiple whitespace and trim
  const cleaned = escaped.replace(/\s+/g, ' ').trim();
  
  // 4. Enforce maximum length constraint
  return cleaned.slice(0, maxLength);
}

/**
 * Sanitizes and validates a phone number string (supports international/Indian format).
 */
export function sanitizePhone(phone: string): string {
  if (!phone || typeof phone !== 'string') return '';
  // Allow digits, plus, hyphens, and spaces only
  return phone.replace(/[^\d+\-\s()]/g, '').trim().slice(0, 20);
}

/**
 * Validates that a phone string contains a realistic number of digits (7 to 15 digits).
 */
export function isValidPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

export interface SanitizedLeadData {
  fullName: string;
  phone: string;
  service: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  sanitized: SanitizedLeadData;
  error?: string;
}

/**
 * Validates and sanitizes lead/contact form submissions.
 */
export function validateAndSanitizeLead(raw: {
  fullName: string;
  phone: string;
  service: string;
  message: string;
}): ValidationResult {
  const fullName = sanitizeInput(raw.fullName, 100);
  const phone = sanitizePhone(raw.phone);
  const service = sanitizeInput(raw.service, 80);
  const message = sanitizeInput(raw.message, 1500);

  if (!fullName || fullName.length < 2) {
    return {
      isValid: false,
      sanitized: { fullName, phone, service, message },
      error: 'Please enter your full name (minimum 2 characters).',
    };
  }

  if (!phone || !isValidPhone(phone)) {
    return {
      isValid: false,
      sanitized: { fullName, phone, service, message },
      error: 'Please enter a valid phone number (at least 7 to 10 digits).',
    };
  }

  return {
    isValid: true,
    sanitized: { fullName, phone, service, message },
  };
}
