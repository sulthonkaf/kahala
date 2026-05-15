export function isValidEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
export function isValidPhone(value: string) { return /^(\+62|62|0)8[1-9][0-9]{6,12}$/.test(value); }
export function isRequired(value: unknown) { return typeof value === "string" ? value.trim().length > 0 : value !== null && value !== undefined; }
