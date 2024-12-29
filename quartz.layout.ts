import { FullPageLayout, PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'MalcolmMielle/MalcolmMielle.github.io',
      // from data-repo-id
      repoId: 'R_kgDOM3MhsA',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDOM3MhsM4Clk-E',
      mapping: "title",
      inputPosition: "top",
      themeUrl: "https://www.malcolmmielle.phd/static/giscus", // corresponds to quartz/static/giscus/
      lightTheme: "light", // corresponds to light-theme.css in quartz/static/giscus/
      darkTheme: "no_border_dark", // corresponds to dark-theme.css quartz/static/giscus/
    }
  }),],
  footer: Component.Footer({
    links: {
      "Scholar-and-code-links": "Links",
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
