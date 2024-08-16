export function isMobileDevice (): boolean {
  return window.matchMedia("(max-width: 767px)").matches
}