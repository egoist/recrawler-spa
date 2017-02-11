# recrawler-spa [![NPM version](https://img.shields.io/npm/v/recrawler-spa.svg)](https://npmjs.com/package/recrawler-spa) [![NPM downloads](https://img.shields.io/npm/dm/recrawler-spa.svg)](https://npmjs.com/package/recrawler-spa) [![Build Status](https://img.shields.io/circleci/project/egoist/recrawler-spa/master.svg)](https://circleci.com/gh/egoist/recrawler-spa)

> [recrawler](https://github.com/egoist/recrawler) but for single page application.

## Install

```bash
$ npm install --save recrawler-spa
```

## Usage

```js
const nightmare = require('recrawler-spa')

nightmare('http://some-url.com/#!/list')
  .then($ => {
    // your code goes here
    const src = $('img').attr('src')
  })
```

## API

### nightmare(url, opts)

Use [nightmare](https://github.com/segmentio/nightmare) to retrieve html from url, this is good for handling SPA website.

#### opts

##### cheerio

[cheerio](https://github.com/cheeriojs/cheerio) options. Except `decodeEntities` is `false` by default here.

##### nightmare

[nightmare](https://github.com/segmentio/nightmare) options.

## License

MIT © [EGOIST](https://github.com/egoist)
