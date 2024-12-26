import { FullPageLayout, PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Github: "https://github.com/MalcolmMielle",
      GoogleScholar: "https://scholar.google.com/citations?user=niir1TkAAAAJ&hl=en",
      Orcid: "https://orcid.org/0000-0002-3079-0512",
      LinkedIn: "https://www.linkedin.com/in/malcolm-mielle",
      Email: "mailto:mmielle.wizard049@passinbox.com"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  header: [
    // Component.PageTitle(),
    Component.Search(),
    // Component.Spacer(),
    Component.Darkmode()
  ],
  beforeBody: [
    Component.ArticleTitle(),
    Component.Breadcrumbs({ spacerSymbol: "⇒", showCurrentPage: false }),
    Component.TagList(),
    // Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      folderDefaultState: "collapsed",
      mapFn: (node) => {
        node.displayName = node.displayName.replace(/\d+&/, '');
      },
      order: ["filter", "sort", "map"],
    }

    )),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Publication",
        limit: 2,
        showTags: false,
        filter: (f) => f.slug!.startsWith("publication/") && f.slug! !== "publication/All-publications",
        linkToMore: "/publication" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Posts",
        limit: 2,
        showTags: false,
        filter: (f) => f.slug!.startsWith("bayesian-brain/"),
        linkToMore: "/bayesian-brain" as SimpleSlug,
      }),
    ),

  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Explorer({
      folderDefaultState: "collapsed",
      mapFn: (node) => {
        node.displayName = node.displayName.replace(/\d+&/, '');
      },
      order: ["filter", "sort", "map"],
    }

    )),
    Component.Backlinks(),
    // Component.DesktopOnly(Component.Spacer()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  header: [
    Component.Search(),
    Component.Darkmode()
  ],
  beforeBody: [
    Component.Breadcrumbs({ spacerSymbol: "⇒" }),
    Component.ArticleTitle(),
    Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Explorer({
      folderDefaultState: "collapsed",
      mapFn: (node) => {
        node.displayName = node.displayName.replace(/\d+&/, '');
      },
      order: ["filter", "sort", "map"],
    }

    )),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Explorer({
      folderDefaultState: "collapsed",
      mapFn: (node) => {
        node.displayName = node.displayName.replace(/\d+&/, '');
      },
      order: ["filter", "sort", "map"],
    }

    )),
    Component.Backlinks(),
  ],
}
