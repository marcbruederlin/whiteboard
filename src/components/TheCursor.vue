<script setup lang="ts">
import { ref } from "vue";
import { useMouse } from "@/composables/mouse";

const { x, y } = useMouse();

const cursor = ref<HTMLDivElement | null>(null);
</script>

<template>
  <div
    ref="cursor"
    class="absolute w-5 h-5 -left-2.5 -top-2.5 border-2 border-black/25 rounded-full active:border-black/50"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
  />
</template>
