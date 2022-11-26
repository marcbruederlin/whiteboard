<script setup lang="ts">
// eslint-disable-next-line no-undef
const version = appVersion;
</script>

<template>
  <div
    class="absolute bottom-10 left-10 text-sm font-light text-gray-600 hidden sm:block"
  >
    <span class="font-normal">Whiteboard</span>
    <span class="text-xs text-gray-400"> &mdash; v{{ version }}</span>
  </div>
</template>
