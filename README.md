# component-fade-plugin-react-consumer

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/component-fade-plugin-react-consumer.svg)](https://www.npmjs.com/package/component-fade-plugin-react-consumer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save component-fade-plugin-react-consumer
```

## Usage

```jsx
import React, { Component } from 'react'

import { withFade } from 'component-fade-plugin-react-consumer'
import 'component-fade-plugin-react-consumer/dist/index.css'


const Example (props) => {
  return (
    <div className={props.withFadeClassname} style={props.withFadeStyle} ref={props.forwardedRef}>
      <h1>Title</h1>
      <p>some text</p>
    </div>
  )
}

export default withFade(Example)({
  classNames: {
    before: "before-fade",
    after: "after-fade"
  },
  config: {
    threshold: 0,
    triggerOnce: true
  },
  transitionConfig: {
    duration: 1000,
    delay: 1000,
    transitionProperty: "opacity",
    transitionTimingFunction: "ease"
  },
  enabled: true
})

```

## License

MIT © [marckraw](https://github.com/marckraw)
