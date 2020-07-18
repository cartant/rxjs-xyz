---
title: "RxXpress"
description: An Experimental Mashup of RxJS and Express
author: "Eugene Ghanizadeh Khoub"
authorGitHub: "loreanvictor"
packageGitHub: "loreanvictor/rxxpress"
date: "2020-07-18T08:43:34+0000"
categories: [API, Backend]
keywords: []
---

An experimental mash-up of RxJS and Express.
```bash
npm i rxxpress
```
```ts
// router.ts
import { Router, respond } from 'rxxpress';

const router = new Router();
router.get('/').pipe(respond(() => 'Hellow World!')).subscribe();
```
```ts
// index.ts
import * as express from 'express';
import router from './router';

const app = express();
app.use(router.core);
app.listen(3000);
```

[Read More](https://github.com/loreanvictor/rxxpress/blob/master/README.md)
