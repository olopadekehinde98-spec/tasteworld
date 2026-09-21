const BASE = 'https://images.unsplash.com/photo-'

/** Build an optimised Unsplash CDN URL for a given photo id and width. */
export function img(id: string, width: number, height?: number): string {
  const size = height ? `&h=${height}` : ''
  return `${BASE}${id}?auto=format&fit=crop&w=${width}${size}&q=75`
}

/** Responsive srcset across the given widths (keeps aspect via optional ratio). */
export function srcSet(id: string, widths: number[], ratio?: number): string {
  return widths
    .map((w) => `${img(id, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`)
    .join(', ')
}
