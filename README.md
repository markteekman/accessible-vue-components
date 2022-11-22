# Accessible Vue Components
A set of Accessible, easy to use, Front-end UI Components for [Vue 3](https://vuejs.org/). Most of these components are used in the [Accessible Vue Starter](https://github.com/markteekman/accessible-vue-starter) which showcases practical use cases for them. As a bonus, the starter also has its own dedicated components (like a keyboard accessible and responsive navigation) and other utilities provided by Tailwind CSS.

> _**NOTE:** This package is still in it's early stages of development, it's NOT recommended to start using it in production yet!_

## Installation
Run the following command in your project folder to get started:
```console
npm install accessible-vue-components
```

## Usage
You can import the different components from the package using the following import statement:

```vue
<script setup>
import { SkipLinks, ... } from 'accessible-vue-components'
</script>
---
```

**Skip to**: [SkipLinks](#SkipLinks)

### SkipLinks

- [Live demo](https://components.accessible-astro.dev/skiplinks)

SkipLinks provide a way for users using assistive technologies to skip repeated content on pages to go directly to the main content of a website or application. To use this component properly, make sure you give the main content of your project an `id` of `#main-content` so the SkipLink can target it. As a fallback the SkipLink will try to target the `h1` of the page. If neither are found a warning will be logged to the console.

**Some (accessibility) features of the SkipLinks**:
- Let's assistive technologies skip to the main navigation and main content of a website

#### Example

```vue
<script setup>
import { SkipLink } from 'accessible-astro-components'
</script>

<template>
  <SkipLinks />
</template>
```

#### Overwriting styles
You can apply your own styles by overwriting the specificity of the default styles. For example, to change the color of the SkipLinks you can use the following CSS:

```scss
<style lang="scss">
  body .skiplinks a {
    color: white;
    background-color: purple;

    &:hover
    &:focus {
      background-color: indigo;
    }
  }
</style>
```

## Other accessible projects by Mark Teekman

- [Accessbile Vue Starter](https://github.com/markteekman/accessible-vue-starter/)
- [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter/)
- [Accessible Astro Dashboard](https://github.com/markteekman/accessible-astro-dashboard/)
- [Accessible Astro Components](https://github.com/markteekman/accessible-astro-components/)
- [Accessible Astro Documentation](https://accessible-astro.dev)

## Helping out

If you find that something isn't working right then I'm always happy to hear it to improve these components! You can contribute in many ways and forms. Let me know by either:

1. [Filing an issue](https://github.com/markteekman/accessible-astro-components/issues)
2. [Submitting a pull request](https://github.com/markteekman/accessible-astro-components/pulls)
3. [Starting a discussion](https://github.com/markteekman/accessible-astro-components/discussions)
4. [Buying me a coffee!](https://www.buymeacoffee.com/markteekman)

## Thank you!

A big thank you to the creators of Vue and to all using these components and the information to make the web a bit more accessible for all people around the world :) Also a big thanks to creators around the web for providing us with information about how to build accessible web interfaces, such as Zell Liew from Learn JavaScript Today and Heydon Pickering, the author of Inclusive Components and many more.

[![buymeacoffee-button](https://user-images.githubusercontent.com/3909046/150683481-be070424-7bb0-4dd7-a3cb-43b5605163f5.png)](https://www.buymeacoffee.com/markteekman)

