/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
  See: https://docs.nativebase.io/default-theme#h2-size
 */
export const radius = {
  1: 2,
  2: 4,
  3: 6,
  4: 8,
  5: 10,
  6: 12,
  7: 14,
  8: 16,
  9: 18,
  10: 20,
} as const;

export type Radius = keyof typeof radius;
