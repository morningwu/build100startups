export function withUTM(url: string): string {
  if (!url || url === '#') return url
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}utm_source=build100startups`
}
