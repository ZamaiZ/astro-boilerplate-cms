/** Monta URL wa.me para números BR (55). */
export function whatsappHref(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "#";
  const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${withCountry}`;
}
