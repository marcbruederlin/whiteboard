<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/main";

const store = useStore();
const { setColor } = store;
const { selectedColor, colors } = storeToRefs(store);
</script>

<template>
  <div class="flex flex-wrap gap-4 w-60">
    <button
      v-for="color in colors"
      :key="color"
      :style="{ backgroundColor: color }"
      :class="{ 'border-4': color === selectedColor }"
      @click="setColor(color)"
      class="w-6 h-6 rounded-full"
    ></button>
  </div>
</template>
