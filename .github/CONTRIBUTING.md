# Have a question?

Please ask questions on [Github Issue](https://github.com/kumpuldev/ects/issues/new) mark with label `question` 

# Issues

We use GitHub issues to track bugs. Please ensure your bug description is clear
and has sufficient instructions to be able to reproduce the issue.

The absolute best way to report a bug is to submit a pull request including a
new failing test which describes the bug. When the bug is fixed, your pull
request can then be merged!

The next best way to report a bug is to provide a reduced test case on jsFiddle
or jsBin or produce exact code inline in the issue which will reproduce the bug.

# Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

# Pull Requests

All active development of ects happens on GitHub. We actively welcome
your [pull requests](https://help.github.com/articles/creating-a-pull-request).

 1. Fork the repo and create your branch from `master`.
 2. Install all dependencies. (`yarn install`)
 3. If you've added code, add tests.
 4. If you've changed APIs, update the documentation.

## Documentation

- Documentation generated using tsdoc, we encourage to visit [playground](https://microsoft.github.io/tsdoc/) if you're not familiar with.

## Coding Style

* we use [Romefrontend](https://romefrontend.dev/) as linter

Run the following command to check or apply linter or simply commiting
your changes will trigger pre-commit hooks that do linting and safefix
```bash
yarn lint
yarn lint:apply
```

# Functionality Testing

Run the following command to build the library and test functionality:
```bash
yarn verify
```

## License

By contributing to ects, you agree that your contributions will be
licensed under its MIT license.
