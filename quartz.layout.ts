import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Github: "https://github.com/MalcolmMielle",
      GoogleScholar: "https://scholar.google.com/citations?user=niir1TkAAAAJ&hl=en",
      Orcid: "https://orcid.org/0000-0002-3079-0512"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
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
    Component.Darkmode(),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),

    Component.MobileOnly(Component.Explorer({
      folderDefaultState: "collapsed",
      mapFn: (node) => {
        node.displayName = node.displayName.replace(/\d+&/, '');
      },
      order: ["filter", "sort", "map"],
    }

    )),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
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
    Component.Darkmode(),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),

    Component.MobileOnly(Component.Explorer({
      folderDefaultState: "collapsed",
      mapFn: (node) => {
        node.displayName = node.displayName.replace(/\d+&/, '');
      },
      order: ["filter", "sort", "map"],
    }

    )),
  ],
}
