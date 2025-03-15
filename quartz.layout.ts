import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ThemeSync from "./quartz/components/ThemeSync"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    ThemeSync(),
  ],
  afterBody: [
    Component.Graph(),
    Component.HyvorComments({
      websiteId: 12725,
      displayDarkMode: true,
    }),
  ],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ hideOnRoot: false }),
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
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({ hideOnRoot: false }), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.SocialLinks(),
    Component.Search(),
    Component.Explorer(),
  ],
  right: [],
}
