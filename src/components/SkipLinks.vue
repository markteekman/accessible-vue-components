<script setup>
import { ref } from 'vue'

const skipLinks = ref(null)

const setFocusOnElement = (element) => {
  element.setAttribute('tabindex', '-1')
  element.focus()
}

const skipFocusToContent = (event) => {
  const target = skipLinks.value.querySelector('a').getAttribute('href')

  if (document.querySelector(target)) {
    const targetElement = document.querySelector(target)
    setFocusOnElement(targetElement)
  } else if (!document.querySelector(target) && document.querySelector('h1')) {
    const h1 = document.querySelector('h1')
    setFocusOnElement(h1)
  } else if (!document.querySelector(target) && !document.querySelector('h1')){
    const main = document.querySelector('main')
    setFocusOnElement(main)
  } else {
    console.warn('SkipLinks are not set, either missing an h1, main landmark or main content id on the page.')
  }
}
</script>

<template>
  <div class="avc-skiplinks" ref="skipLinks">
    <a href="#main-content" class="skiplinks__skiplink" @keydown.enter="skipFocusToContent">
      <slot>Skip to main content</slot>
    </a>
  </div>
</template>

<style>
.avc-skiplinks a {
  color: var(--action-color, #222);
  background-color: var(--background, #fff);
  border-bottom-right-radius: 6px;
  padding: 1rem 3.25rem;
  position: absolute;
  display: block;
  z-index: 10;
  top: -100vh;
  left: 0;
}

.avc-skiplinks a:hover,
.avc-skiplinks a:focus {
  top: 0;
  outline-offset: 2px;
}
</style>
