## Format

Use the [Ruff formater](https://docs.astral.sh/ruff/formatter/) and follow PEP-8 (including import [sort order](https://peps.python.org/pep-0008/#imports)).
Your "pyproject.toml" file should include the parameters to format and link.

```toml
[tool.ruff]
line-length = 88
indent-width = 4
# Allow fix for all enabled rules (when `--fix`) is provided.
fixable = ["ALL"]
unfixable = []

[tool.ruff.format]
# Like Black, use double quotes for strings.
quote-style = "double"
# Like Black, indent with spaces, rather than tabs.
indent-style = "space"
# Like Black, respect magic trailing commas.
skip-magic-trailing-comma = false
# Like Black, automatically detects the appropriate line ending.
line-ending = "auto"
# Enable auto-formatting of code examples in docstrings. Markdown,
# reStructuredText code/literal blocks and doctests are all supported.
#
# This is currently disabled by default, but it is planned for this
# to be opt-out in the future.
docstring-code-format = true
# Set the line length limit used when formatting code snippets in
# docstrings.
#
# This only has an effect when the `docstring-code-format` setting is
# enabled.
docstring-code-line-length = "dynamic"
```

## Lint

Run `ruff check` on your code to lint using pyflakes errors and a subset of pycodestyle.
The "pyproject.toml" file should have:

```toml
[tool.ruff.lint]
# Enable Pyflakes (`F`) and a subset of the pycodestyle (`E`)  codes by default.
# Unlike Flake8, Ruff doesn't enable pycodestyle warnings (`W`) or
# McCabe complexity (`C901`) by default.
select = ["E", "F"]
ignore = ["F722", "F821"]
```

No lint errors should happen before merging.

## Type Annotation

Follow [PEP-484](https://www.python.org/dev/peps/pep-0484/).
Type annotations (or “type hints”) are for function or method arguments and return values (including `None` when nothing is returned):

`def func(a: int) -> list[int]:`

You can also declare the type of variables using similar PEP-526 syntax:

`a: SomeType = some_func()`

Avoid declaring instance attributes outside the `__init__` method as much as possible. But when it's unavoidable, type hint should be added on top of the class:

```python
class AClass:
    an_attribute: int

    def a_late_init(self):
        self.an_attribute = 1
```

While this looks like a class attribute instead of an instance attribute, it actually only creates an annotation, which is pure metadata and thus compliant with [PEP-526](https://www.python.org/dev/peps/pep-0526/#rationale). Since `self.an_attribute` is declared in a method, it's an instance attribute in the end. This is nicely explained by [this stack overflow answer](https://stackoverflow.com/a/59481550/2651229).

## Docstrings

Python uses docstrings to document code. A docstring is a string that is the first statement in a package, module, class, or function. These strings can be extracted automatically through the __doc__ member of the object and are used by pydoc.
Try running pydoc on your module to see how it looks.
Always use the three double-quotes """ format for docstrings and follow [PEP-287](https://peps.python.org/pep-0287/).

A docstring should be organized as a summary line (one physical line not exceeding 80 characters) terminated by a period, question mark, or exclamation point. When writing more (encouraged), this must be followed by a blank line, followed by the rest of the docstring starting at the same cursor position as the first quote of the first line.

Use prose to explain parameters and exceptions.
Docstrings are formatted following [reStructuredText]((<https://docutils.sourceforge.io/docs/ref/rst/introduction.html>).
Use \` in doc comments to refer to in-scope identifiers and use `self` to refer to instance attributes.
It helps to know that a word refers to an identifier when reading the documentation.
See `param1` in the example above.

```python
"""
Summarizes the method using `param1`.

Talks about the method and explain the role of `param1` and `param2` and
what the attribute `self.attribute` is used for.

:returns: a description of what is returned.
:raises keyError: raises an exception
"""
```

### Readability

To help readability, prefer following syntax rules outlined in [effective documentation for dart](https://dart.dev/guides/language/effective-dart/documentation#prefer-writing-doc-comments-for-public-apis). Keep in mind that dart is another language, so not all rules will work.

Rules that are of interest include:

* AVOID redundancy with the surrounding context.
  The reader of a class’s doc comment can clearly see the name of the class, what interfaces it implements, etc. When reading docs for a member, the signature is right there, and the enclosing class is obvious. None of that needs to be spelled out in the doc comment. Instead, focus on explaining what the reader doesn’t already know.
* PREFER starting function or method comments with third-person verbs: the doc comment should focus on what the code does.

See the link to effective documentation in dart for examples.