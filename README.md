# CivicSource ESLint Configuration

> Shareable ESLint configuration to be used in CivicSource client applications

[Read more](http://eslint.org/docs/developer-guide/shareable-configs) in general about how eslint shareable configurations work.

## Install

```
npm install eslint-config-civicsource --save-dev
```

## Usage

Add to your `.eslintrc.yml`:

```yaml
extends:
  - civicsource
```

You could also choose to only import the style rules:

```yaml
extends:
  - civicsource/style
```

or only the react rules:

```yaml
extends:
  - civicsource/react
```

or a mixture.

## Contributing

When adding rules or plugins, put them into the correct js file based on category (e.g. add react rules to `react.js`). Make sure to add a small comment explaining what the rule does (feel free to be as snarky as possible) along with a link to the rule documentation.

### Versioning

When making changes, be sure to [follow semantic versioning](http://semver.org/).

* Any new _error_ rules you add should be a major version bump.
* Any more restrictive changes to existing _error_ rules should be a major version bump.
* Any easing of restrictions to existing _error_ rules can be a minor version bump.
* Any new fixable _error_ rules can be a minor version bump. 
* Any addition or changes to _warning_ rules should be a minor version bump.
* Any bug fixes should be a patch version bump.
* Anytime you realize you broke one of these rules, fixing it should be a patch version bump.