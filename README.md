# `@shoker/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo - written in Typescript and meant for the browser (uses `localStorage`)

## Install

```sh
yarn add @shoker/streak-counter
```

```sh
npm install @shoker/streak-counter
```

### Usage

```javascript
import { streakCounter } from "@shoker/streak-counter";

const today = new Date();
const streak = streakCounter(localStorage, today);
// streak returns an object:
// {
//    currentCount: 1,
//    lastLoginDate: "11/11/2021",
//    startDate: "11/11/2021",
// }
```