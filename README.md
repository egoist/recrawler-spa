# aimer-nightmare [![NPM version](https://img.shields.io/npm/v/aimer-nightmare.svg)](https://npmjs.com/package/aimer-nightmare) [![NPM downloads](https://img.shields.io/npm/dm/aimer-nightmare.svg)](https://npmjs.com/package/aimer-nightmare) [![Build Status](https://img.shields.io/circleci/project/egoist/aimer-nightmare/master.svg)](https://circleci.com/gh/egoist/aimer-nightmare)

> [Aimer](https://github.com/egoist/aimer) for single page application.

## Install

```bash
$ npm install --save aimer-nightmare
```

## Usage

```js
const nightmare = require('aimer/nightmare')

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
