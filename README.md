# LangView

While large language models are increasing in their breadth of utility, with new models emerging, support for plugins, and agent-based behaviour through chaining, their responses are still limited largely to text.

LangView is an open-source GUI layer for large language models, that uses a set of conventions allowing models to respond in YAML which can then be interpreted as live GUI components.

LangView ships with a default set of simple & flexible components, which can be extended upon to suit any specific domain.

## Goals

- Platform & language agnostic: LangView is designed to work with any GUI implementation of its components. The model only needs to know a YAML schema of the components it has to work with, and the rest can be implemented by the component library.
- Model agnostic: As long as a model can follow the structured format of LangView's spec, it can output GUIs.
- Extendable: Components can easily be extended and passed to LangView, to broaden & customise a model's graphical vocabulary.
- Controllable: While it's possible for language models to write code describing an arbitrary interface, LangView aims to offer a set of constraints so designers can control the space of allowed interfaces.