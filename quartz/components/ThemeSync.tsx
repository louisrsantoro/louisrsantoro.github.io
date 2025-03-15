import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Component to add Cross-Domain Theme Sync to Quartz
 */
const ThemeSync: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return null
}

// Add the script tag to load theme-sync.js
ThemeSync.beforeDOMLoaded = `
  const themeSyncScript = document.createElement('script');
  themeSyncScript.src = '/scripts/theme-sync.js';
  document.head.appendChild(themeSyncScript);
`

export default (() => {
  return ThemeSync
}) satisfies QuartzComponentConstructor 