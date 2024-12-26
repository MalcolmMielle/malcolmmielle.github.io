---
tags:
  - python
  - research
---

# CI for Python Research

Continuous Integration (CI) enables you to maintain the quality of your code in time and for your contributors.
Such pipelines should at least check:

- Lint rules
- Unit tests

Usually, pipelines are run in specific environments defined by a Docker file or by the CI provider.

A CI pipeline should run for every merge into your main branch and for PR before they are merged into the main branch.
Those can be enforced on the provider; you should use branch protection settings.
GitHub provides GitHub Actions, GitLab has its CI/CD, and Codeberg has both Forgejo Actions and Woodpecker.
Setting the pipeline up for each is done through config files and config files are mostly reusable between projects.
For your research, it means that once it is done for one repo, the work needed for new projects is minimal.

An example of config file for GitHub and Forgejo actions can be found on [this repo on Codeberg](https://codeberg.org/MalcolmMielle/code_repo_templates) if you clone the python branch:

```bash
git clone -b python git@codeberg.org:MalcolmMielle/.vscode.git
```

In this case, the pipelines do only three things: 1) use Ruff linter, 2) install the package and its dependencies 3) run all unit tests.
This ensures the new code respects the code guidelines and does not break the existing code base.
