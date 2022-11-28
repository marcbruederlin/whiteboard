<script setup lang="ts">
import { ref } from "vue";
import { useMouse } from "@/composables/mouse";

const { x, y, isMouseDown } = useMouse();

const cursor = ref<HTMLDivElement | null>(null);
</script>

<template>
  <div
    ref="cursor"
    class="fixed w-5 h-5 -left-2.5 -top-2.5 border-2 border-black/25 rounded-full pointer-events-none"
    :class="{ 'border-black/50': isMouseDown }"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
  />
</template>
