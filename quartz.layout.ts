import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "louisrsantoro/louisrsantoro.github.io",
        repoId: "R_kgDOOFG9TA",
        category: "Comments",
        categoryId: "DIC_kwDOOFG9TM4Cn0Ot",
        mapping: "pathname",
        strict: true,
        reactionsEnabled: true,
        inputPosition: "bottom",
        themeUrl: "https://notes.louissantoro.com/quartz/static/giscus",
        lightTheme: "light",
        darkTheme: "dark"
      }
    }),
    Component.Graph()
  ],
  footer: Component.Footer({
    links: {
      "X/Twitter": "https://x.com/dikaiosvne",
      "GitHub": "https://github.com/louisrsantoro"
    }
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.TagList(),
    Component.ReaderMode(),
    Component.TableOfContents(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.SocialLinks(),
    Component.Search(),
    Component.Explorer(),
  ],
  right: [
    Component.Backlinks()
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.SocialLinks(),
    Component.Search(),
    Component.Explorer(),
  ],
  right: [],
}
