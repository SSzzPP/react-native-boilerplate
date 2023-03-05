/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
  See: https://docs.nativebase.io/default-theme#h2-size
 */
export const spacing = {
  1: 2,
  2: 4,
  3: 8,
  4: 12,
  5: 16,
  6: 20,
  7: 24,
  8: 28,
  9: 32,
  10: 36,
  11: 40,
  12: 48,
  13: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
} as const;

export type Spacing = keyof typeof spacing;
