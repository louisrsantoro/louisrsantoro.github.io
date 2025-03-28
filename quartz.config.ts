import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Louis Santoro",
    subtitle: "Philosophy PhD Candidate<br>Complex systems researcher studying LLMs, brains, geopolitics, social networks",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
      host: "https://plausible.io/js/script.outbound-links.js"
    },
    locale: "en-US",
    baseUrl: "notes.louissantoro.com",
    ignorePatterns: ["private", "templates", ".obsidian", "terms.md"],
    defaultDateType: "modified",
    generateSocialImages: {
      colorScheme: "lightMode",
      width: 1200,
      height: 630,
      excludeRoot: false,
    },
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Crimson Pro",
        body: "Crimson Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f9fa",
          lightgray: "#e5e5e5",
          gray: "#c4d0d8",
          darkgray: "#6e7f80",
          dark: "#4a4a4a",
          secondary: "#5a7b9c",
          tertiary: "#748c9c",
          highlight: "#d7dfe5",
          textHighlight: "#c4d0d8",
        },
        darkMode: {
          light: "#1e2124",
          lightgray: "#748c9c",
          gray: "#87999a",
          darkgray: "#c0c5ca",
          dark: "#d6d9dc",
          secondary: "#8aaac1",
          tertiary: "#6a8391",
          highlight: "#3c4f5a",
          textHighlight: "#87999a",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
        collapseByDefault: true,
        minEntries: 1,
      }),
      Plugin.CrawlLinks({ 
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true,
        externalLinkIcon: false
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
