---
tags:
  - research
  - writing
---

# Cite Software and Datasets in Your Research

I find it interesting how, even in computer science and machine learning, citing elements other than papers is still done using URLs.
However, using URL is a bad choice as [link rot](http://dx.doi.org/10.1002/asi.23561) is a [real problem](https://blog.linkody.com/case-studies/link-rot); it's "ok" for some   information but it is a real problem when science needs to be reproducible.
One cannot reproduce code, data, and experimental settings that one cannot find them anymore.

## Types of Permanent Links

Permalinks are URLs that are intended to remain unchanged for many years into the future.
There are different ways to obtain such links for your research material:

* Digital object identifiers (DOI) are persistent identifiers used to uniquely identify various objects. They are standardized by the International Organization for Standardization (ISO). DOI are very common in research, especially for paper but they cost money.
* [Archival Resource Keys](https://arks.org/)
* [W3ID](https://w3id.org/)
* [SWHID](https://www.swhid.org/)

## Referencing a Dataset

This is the easiest one to do because there are plenty of resources.
One of the most popular options is to use [Zenodo](https://zenodo.org) (by CERN).
For each resource uploaded, Zenodo will provide you with a DOI and a snapshot of the dataset.

## Referencing Software

### Using a DOI

For code, it is also possible to use Zenodo.
You can upload a snapshot of your code to Zenodo while also providing a URL to the code itself.
The snapshot will be saved in Zenodo and a DOI will be provided.
It is also possible to use the GitHub integration to have Zenodo automatically save the code releases.
Then for each citable version of the code, a release should be created on GitHub.

If you are in the EU I would advise using other git service providers such as [Codeberg](https://codeberg.org/) so that your code stays in the EU with its associated laws.
Then the process of saving a release must for now be manually done.
See this [codeberg issue](https://codeberg.org/Codeberg/Community/issues/295) for work in progress for zenodo integration.

### Using a SWHID

Another possibility is to use the [Software heritage](https://www.softwareheritage.org/faq/#34_Which_type_of_SWHID_should_I_use_in_my_articledocumentation) of INRIA to obtain a SWHID.
As seen on their website, the goal of the software heritage is:

> The long-term goal of the Software Heritage initiative is to **collect** all publicly available software in source code form together with its development history, replicate it massively to ensure its **preservation**, and **share** it with everyone who needs it. The Software Heritage archive is growing over time as we crawl new source code from software projects and development forges.

Codeberg is already a watched instance of the Software Heritage initiative and code saved in the archive can already be referenced using SWHID!
SWHID points to a snapshot of the code saved by the software heritage foundation and can be used to [reference](https://www.softwareheritage.org/howto-archive-and-reference-your-code/) your [code](https://www.softwareheritage.org/save-and-reference-research-software/).

For example in LaTeX, the best way to reference your code is actually to _cite it like any other reference in the reference list_ using [biblatex-software](https://www.ctan.org/tex-archive/macros/latex/contrib/biblatex-contrib/biblatex-software).
However, I know a lot of people prefer having a link in the footnote because of habits.
In this case, use either the doi to the released version or SWHID to a specific version.
The only downside of the SWHID is that it is difficult to go back to the "original" URL if you point to a specific SWHID without the reference to the repo.
For example from [this link](https://archive.softwareheritage.org/swh:1:rev:bb221283c204ace4fe5cc6f4438d35073c41fab8;origin=https://github.com/MalcolmMielle/Auto-Complete-Graph;visit=swh:1:snp:8a575153bb620b44dd8d45b31a1679ed68f93614) brings you to a specific commit and the repo link is still visible on top.
However, this is a really long link and not suitable for display in the footnote or references:

```
https://archive.softwareheritage.org/swh:1:rev:bb221283c204ace4fe5cc6f4438d35073c41fab8;origin=https://github.com/MalcolmMielle/Auto-Complete-Graph;visit=swh:1:snp:8a575153bb620b44dd8d45b31a1679ed68f93614
```

On the other hand, searching for the SWHID `swh:1:rev:bb221283c204ace4fe5cc6f4438d35073c41fab8` in the interface gives only the specific version and its history but not the link to the repo it comes from.
For convenience sake, the solution is to use href as such:

```latex
\href{https://archive.softwareheritage.org/swh:1:rev:bb221283c204ace4fe5cc6f4438d35073c41fab8;origin=https://github.com/MalcolmMielle/Auto-Complete-Graph;visit=swh:1:snp:8a575153bb620b44dd8d45b31a1679ed68f93614}{swh:1:rev:bb221283c204ace4fe5cc6f4438d35073c41fab8}
```

To display the reference SWHID so people can search for the hyperlinks dies, but the hyperlink goes to the correct place.

In my opinion, it is easier to use Zenodo to obtain a DOI that is well-known by others and display it in the footnote or the reference list.
However, SWHID has the advantage of:

1. Being git commit compatible
2. Being able to point at specific lines (see section [code fragment](https://www.softwareheritage.org/save-and-reference-research-software/))

This is a side note but Zenodo will upload snapshots directly to the Software Heritage website so you can have the best of both.

## Getting a Code Repo with a Dead Link

Using the Software Heritage website, it is possible to recover code repositories that were recorded even if they do not exist anymore.

Simply use the given Github URL and prepend `https://archive.softwareheritage.org/browse/origin` to it.
For example with [Auto-Complete graph](https://github.com/MalcolmMielle/Auto-Complete-Graph), the link `https://archive.softwareheritage.org/browse/origin/https://github.com/MalcolmMielle/Auto-Complete-Graph` should lead to the [Software heritage archival](https://archive.softwareheritage.org/browse/origin/https://github.com/MalcolmMielle/Auto-Complete-Graph).
