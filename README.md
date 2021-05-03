# use-bool

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/use-bool/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-bool.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-bool)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/use-bool.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/use-bool)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/use-bool)](https://app.codecov.io/gh/brunoscopelliti/use-bool/)

A shortcut for React.useState<boolean>. 

## Install

```
npm i @bscop/use-bool
```

## Usage

```js
import useBool from "@bscop/use-bool";

const [state, setTrue, setFalse] = useBool();
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
