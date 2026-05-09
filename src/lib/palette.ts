/**
 * Gera estilo inline com variáveis CSS derivadas da cor primária (OKLCH + color-mix).
 */
export function cssVarsFromPrimary(hex: string): string {
  const safe = hex?.trim() || "#2563eb";
  return [
    `--color-primary: ${safe};`,
    `--color-primary-soft: color-mix(in oklch, ${safe} 18%, white);`,
    `--color-primary-muted: color-mix(in oklch, ${safe} 45%, oklch(0.35 0.02 260));`,
    `--color-surface-elevated: color-mix(in oklch, white 96%, ${safe});`,
    `--color-border-subtle: color-mix(in oklch, ${safe} 14%, oklch(0.92 0.01 260));`,
    `--gradient-mesh: radial-gradient(120% 80% at 90% 10%, color-mix(in oklch, ${safe} 22%, transparent), transparent 55%), radial-gradient(100% 60% at 10% 90%, color-mix(in oklch, ${safe} 12%, transparent), transparent 50%);`,
  ].join(" ");
}
