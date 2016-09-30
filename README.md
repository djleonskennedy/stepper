# EASY STEP

helps to handle stepped animation programmatically

[![travis build](https://img.shields.io/travis/djleonskennedy/stepper.svg?style=flat-square)](https://travis-ci.org/djleonskennedy/stepper.svg?branch=master)
[![travis build](https://img.shields.io/codecov/c/github/codecov/c/djleonskennedy/stepper.svg?style=flat-square)](https://travis-ci.org/djleonskennedy/stepper.svg?branch=master)

## Example

[![Easy Step Example]()](https://djleonskennedy.github.io/stepper/)

## Installation

npm

`npm i easy-step`

cdn

`<script src="https://unpkg.com/easy-step@1.3.1/dist/index.umd.min.js"></script>`

## Usage

browser
```
var stepper = new EasyStep()
```

es5 umd
```
var EasyStep = require('easy-step')

var stepper = new EasyStep()
```

es6
```
import EasyStep from 'easy-step'

var stepper = new EasyStep()
```

### Constructor `EasyStep`

| Parameter      | type             | Status           | Description |
| :------------- | :--------------- | :--------------- | :---------- |
| `trigger`      | `DOM element`    | `optional`       | Use it to trigger animation, also you can use api to trigger animation so it's optional |
| `items`        | `any`            | `required`       | item that should be animated, can be everything because they will be passed in callback as parameter |
| `delay`        | `Int`            | `required`       | delay animation |

### API

| function              | params               | Return           | Description |
| :-------------------- | :------------------  | :--------------- | :---------- |
| `on`                  | `String`, `function` | `null`           | subscribe on event |
| `off`                 | `String`, `function` | `null`           | unsubscribe on event |
| `trigger`             |                      | `null`           | trigger amination |
| `reverseDirection`    |                      | `null`           | reverse animation direction |
| `isForward`           |                      | `Bool`           | check if forward |
| `isBackward`          |                      | `Bool`           | check if backward |

### Events

| event                 | callback args type    | Description |
| :-------------------- | :------------------   | :---------- |
| `forward`             | `any`                 | fires on forward |
| `backward`            | `any`                 | fires on backward |
| `complete`            | `any`                 | on all items animated |