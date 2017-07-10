# :art: NICE Design System

> Your source for quickly creating consistent on-brand NICE digital services.

[![License](https://img.shields.io/github/license/nhsevidence/nice-design-system.svg)](https://github.com/nhsevidence/nice-design-system/blob/master/LICENSE)
[![Dependencies](https://img.shields.io/david/nhsevidence/nice-design-system.svg)](https://david-dm.org/nhsevidence/nice-design-system)
[![Dev dependencies](https://img.shields.io/david/dev/nhsevidence/nice-design-system.svg)](https://david-dm.org/nhsevidence/nice-design-system?type=dev)

<details>
<summary><strong>Table of contents</strong></summary>

- [What is it?](#what-is-it)
- [Browser support](#browser-support)
- [Project structure](#project-structure)
- [Development](#development)
	- [Getting started](#getting-started)
		- [npm](#npm)
		- [Grunt](#grunt)
	- [JavaScript](#javascript)
	- [SASS](#sass)
	- [Icons](#icons)
- [Test](#tests)
- [Installation](#installation)
	- [CDN](#nice-cdn)
	- [Install with yarn](#install-with-yarn)
	- [Install with npm](#install-with-npm)
	- [Install with Bower](#install-with-bower)
	- [Usage](#usage)
		- [Precompiled](#precompiled)
		- [From source](#from-source)
</details>

## What is it?

NICE Design System is a replacement for [NICE.Bootstrap](https://github.com/nhsevidence/NICE.Bootstrap/). It's a design system, front-end toolkit and pattern library for rapidly building modern, accessible web apps that are consistent with the NICE brand guidelines.

## Browser support

| IE/Edge | Chrome | Firefox | Safari | Safari (iOS) | Android | 
| ------- | ------ | ------- | ------ | ------------ | ------- |
| ![Internet Explorer](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/chrome/chrome_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/safari/safari_48x48.png) | ![Safari (iOS)](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/safari-ios/safari-ios_48x48.png) | ![Android](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/35.2.0/android/android_48x48.png) |
| 8+ | 52+ | 47+ | Latest | Latest | Latest |

And all other modern browsers

We support IE8 because of our audience - traffic to nice.org.uk as of 22/09/2016:

- 15.80% - IE11
- 5.08% - IE8
- 2.61% - IE9
- 1.78% - IE10
- 0.56% - IE7

To support older IE we have separate builds of our JS and CSS.

## Accessibility

NICE Design System has been built with accessibility in mind and is built to conform to WCAG 2.0 AA. 

See https://www.nice.org.uk/accessibility for more information on NICE's policy.

## Project structure

| Folder | Description |
| ---- | ----------- |
| [.github](.github) | [Github templates folder](https://help.github.com/articles/helping-people-contribute-to-your-project/) |
| [.grunt-tasks](.grunt-tasks) | Grunt task configs loaded in from Gruntfile.js |
| [dist](dist) | Built files for distribution with each new version |
| [src](src) | The main source |
| - [src/assets](src/assets) | Common static assets |
| - [src/components](src/components) | Components (SASS/JS/Nunjucks view/test) |
| - [src/icons](src/icons) | SVG icon font source |
| - [src/javascripts](src/javascripts) | Main JavaScript source + [JSDoc config](src/javascripts/.jsdoc.json) and [ESLint config](src/javascripts/.eslintrc.json) |
| - [src/stylesheets](src/stylesheets) | Main SASS + [SASS Lint config](src/stylesheets/.sass-lint.yml) + [SASS Doc custom theme](src/stylesheets/sassdoc-nice-theme.js) |
| [server](server) | Express dev server, views etc for testing and building components |
| [test](test) | Test setup and unit tests |

## Development

### Getting started

	TL;DR:
		1. `yarn`
		3. `npm start`

To run the dev server and tests on your local machine, first install:

- [Node 6+](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)

Then before you can run any tasks, run the following from the command line to install dependencies:

- `yarn`

Note: if you prefer to use npm rather than yarn, run `npm i` instead.

We use Grunt as a task runner hence the dependency on Node. If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide first.

Run `npm start` from the command line for development which will:

- run tests
- lint JavaScript and SCSS
- build the required assets (JS/CSS/web fonts)
- serve the development site
- watch for change to source files

There are also other commands you can run:

#### npm

Run `npm start` and `npm run test:watch` for development. However, there are other npm scripts available to be run for other tasks:

| Task | Description |
| ---- | ----------- |
| `npm start`           | Simply runs `grunt` under the hood |
| `npm test`            | Runs JS tests |
| `npm run test:watch`  | Runs JS test tests (with [min reporter](https://github.com/mochajs/mocha/blob/master/lib/reporters/min.js)) and watches for changes. Useful to run in development alongside grunt. |
| `npm run test:coverage`  | Runs JS test tests and generates a coverage report with [Istanbul](https://istanbul.js.org/) into the *coverage* folder |
| `npm run lint`        | Lints SASS and JS (uses `grunt lint` under the hood) |
| `npm run release`        | Builds the assets in dist mode, increments package.json patch version, pushes a new git tag, creates a GitHub release (with release notes from commits since last release) and creates an npm release. |

#### Grunt

Some of the npm scripts use Grunt tasks under the hood. These Grunt tasks (and aliases) can be run directly e.g. `grunt lint`. However, we recommend using the npm scripts themselves. See the task aliases in [Gruntfile.js](Gruntfile.js) for more information.

### JavaScript

See the [javascript](src/javascripts) folder for more information.

### SASS

See the [stylesheets](src/stylesheets) folder for more information.

### Icons

See the [icons](src/icons) folder for more information.

## Tests

See the [test](test) folder for more information.

## Installation

### NICE CDN

TODO - we will deploy pre-compiled versions onto cdn.nice.org.uk

### Install with yarn

`yarn add @nice-digital/design-system -D`

Then follow the [usage](#usage) steps below...

### Install with npm

`npm i @nice-digital/design-system --save-dev`

Then follow the [usage](#usage) steps below...

### Install with Yaen

`yarn install @nice-digital/design-system --save-dev`

Then follow the [usage](#usage) steps below...

### Install with bower

`bower i nice-design-system`

Then follow the [usage](#usage) steps below...

### Usage

#### Precompiled

Not recommended for production, but useful for quick prototypes, the npm package includes a dist folder with precompiled assets.

You can reference directly if you have the correct permissions:

```html
<!-- Font from Google & compiled/minified CSS -->
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700" rel="stylesheet">
<link rel="stylesheet" href="/node_modules/@nice-digital/design-system/dist/stylesheets/nice.min.css">

<!-- jQuery from CDN & compiled/minified JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/node_modules/@nice-digital/design-system/dist/javascripts/nice.min.js"></script>
```

OR if you're using express you can use the dist folder as a static directory:

```javascript
app.use(express.static(__dirname + "/node_modules/@nice-digital/design-system/dist/"));
```

and then reference it from your HTML as:

```html
<link rel="stylesheet" href="/stylesheets/nice.min.css" type="text/css" media="screen" charset="utf-8">
<script src="/javascripts/nice.min.js"></script>
```

OR you can use a copy command (with Grunt or similar) to copy the compiled assets out of the *node_modules* folder to somewhere where you can serve them.

#### From source

The npm package contains the source code as well as the precompiled assets.