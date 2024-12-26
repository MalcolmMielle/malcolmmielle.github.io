---
tags:
  - python
  - research
---
Python packaging helps you create code that can be easily tested, used, and extended by other people/researchers.
Especially, it enables others to extend your code through dependencies import.
Seeing as most people in research tend to fork and develop a new version of the code without ever merging their changes back into the main repository leading to high fragmentation of the space (or duplicated implementations), correct Python packaging is great for researchers who want to use the latest version of a given research code but don’t want to push their changes to the original repo.
Indeed, a "fork and develop" strategy without plans the merge one’s changes in the main repo, ends up creating multiple versions of the same code, hurting reproducibility and collaboration efforts, and leaves other people to "figure out which version is best".
This article is about avoiding this situation.

I recommend using [uv](https://docs.astral.sh/uv/) to manage your code.
You will find a template of the Python repo on [Codeberg](https://codeberg.org/MalcolmMielle/code_repo_templates) if you clone the python branch:

```bash
git clone -b python git@codeberg.org:MalcolmMielle/.vscode.git
```

## Packaging

Your package needs:

- A `pyproject.toml` file. This file contains all the important information for your packages such as dependencies, version, formatting, and linting rules.
- A "tests" folder to have your unit test files
- A folder per package of your project or a "src" containing the different packages

Most of those can be automatically created by using `uv init —python 3.XX` with `3.XX` is the python version you want to use.

In the end, it should look like this:

```bash
repo-name
|--repo_name
|  |--__init__.py
|  |--a_package
|  |  |--example.py
|  |--another_package
|  |  |--something.py
|--data
|  |--datatset1
|  |--datatset2
|--tests
|  |--test_a_package
|  |  |--__init__.py
|  |  |--a_test.py
|  |--test_another_package
|  |  |--__init__.py
|  |  |--a_test.py
|--pyproject.toml
|--README.md
```

### Dependencies

It is important that dependencies needed for the program to run be defined in your "pyproject.toml".
==Do not use requirements.txt for listing dependencies==!
The "requirements.txt" is _not_ a dependency management system, it is used to share exact requirements with others for reproduction.
This use case is better solved by using Docker.

Dependencies can be added in the `dependencies` section of the "pyproject.toml".
Version here should be loose; >= should always be preferred to strict = requirements to automatically benefits from improvements in the newer versions of the dependencies and to keep up to date with the security and improvement updates without having to jump multiple versions in one go.

With UV the process can be automatically done using `uv add your_dep`.

### Reproduction Scripts

The next important thing for research is to provide scripts to run your program(s) and reproduce your experiments.
Those scripts should be provided in a "scripts" or "cli" folder in your packages such folder so that they're installable.
Furthermore, you can add them to your "pyproject.toml" so that they are installed and usable in your environment:

```toml
[project.scripts]
script-name = "package.cli.script_name:main"
```

## Style Guide

To improve code collaboration, package should define a "style guide" for python code that new contributors must follow to be able to contribute code.
I would generally recommend to use an established guide instead of creating your own; the cost of getting use to a guide is lower that the code of asking every collaborator to learn your custom style.
Even better if your style guide follows the rules of an automatic formatting program like Ruff.

As an example, this is the [[Python style guide]] I use in all my projects.
Feel free to use it in yours.
