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

## Versioning

When making changes to this repo, be sure to [follow semantic versioning](http://semver.org/).

* Any new _error_ rules you add should be a major version bump.
* Any more restrictive changes to existing _error_ rules should be a major version bump.
* Any addition or changes to _warning_ rules should be a minor version bump.
* Any bug fixes should be a patch version bump. 