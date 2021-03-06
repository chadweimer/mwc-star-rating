# \<mwc-star-rating>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

[![Published on NPM](https://img.shields.io/npm/v/@cwmr/mwc-star-rating.svg)](https://www.npmjs.com/package/@cwmr/mwc-star-rating)
![Node.js Package](https://img.shields.io/github/workflow/status/chadweimer/mwc-star-rating/Node.js%20Package)
[![license](https://img.shields.io/github/license/chadweimer/mwc-star-rating.svg)](LICENSE)

## Installation

```bash
npm i @cwmr/mwc-star-rating
```

## Usage

```html
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
<script type="module">
  import '@cwmr/mwc-star-rating';
</script>

<mwc-star-rating></mwc-star-rating>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well

```bash
npm run lint:eslint
```

```bash
npm run lint:prettier
```

To automatically fix many linting errors, run

```bash
npm run format
```

You can format using ESLint and Prettier individually as well

```bash
npm run format:eslint
```

```bash
npm run format:prettier
```

## Testing with Web Test Runner

To run the suite of Web Test Runner tests, run

```bash
npm run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
