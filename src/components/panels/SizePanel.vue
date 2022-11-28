<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/main";

const store = useStore();
const { setSize } = store;
const { selectedSize, sizes, selectedColor } = storeToRefs(store);
</script>

<template>
  <div class="flex flex-wrap items-center gap-4 w-40">
    <button
      v-for="size in sizes"
      :key="size"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: selectedColor,
      }"
      :class="{ 'border-4 dark:border-white': size === selectedSize }"
      @click="setSize(size)"
      class="rounded-full"
    ></button>
  </div>
</template>
