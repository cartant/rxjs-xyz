---
title: "rxdeep"
description: Reactive State-Management using RxJS
author: "Eugene Ghanizadeh Khoub"
authorGitHub: "loreanvictor"
packageGitHub: "loreanvictor/rxdeep"
date: "2020-07-18T08:43:34+0000"
categories: [state management]
keywords: []
---

Fast and precise reactive state management, in a flexible and unopinionated manner. 
Make changes to any part of your state tree, track changes, subscribe to specific node/sub-tree, 
track changes by entity keys, verify changes, etc.

```bash
npm i rxdeep
```
```ts
import { State } from 'rxdeep';
const state = new State([ { name: 'John' }, { name: 'Jack' }, { name: 'Jill' } ]);

state.sub(1).sub('name').subscribe(console.log);     // --> subscribes to property `name` of object at index 1 of the array
state.value = [ { name: 'Julia' }, ...state.value ]; // --> logs `John`, since `John` is index 1 now
state.sub(1).value = { name: 'Josef' };              // --> logs `Josef`
state.sub(1).sub('name').value = 'Jafet';            // --> logs `Jafet`
```

[Read More](https://github.com/loreanvictor/rxdeep/blob/master/README.md)
