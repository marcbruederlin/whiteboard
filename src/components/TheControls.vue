<script setup lang="ts">
import {
  ArrowUturnLeftIcon,
  PencilIcon,
  SwatchIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";

const items = [
  {
    key: "size",
    icon: PencilIcon,
    method: () => console.log("Open brush window"),
  },
  {
    key: "color",
    icon: SwatchIcon,
    action: () => console.log("Open color window"),
  },
  {
    key: "undo",
    icon: ArrowUturnLeftIcon,
    action: () => console.log("Undo last action"),
  },
  {
    key: "clear",
    icon: XCircleIcon,
    action: () => console.log("Clear canvas"),
  },
];
</script>

<template>
  <div
    class="absolute flex items-center bottom-10 px-8 py-4 gap-x-2 rounded-full bg-white shadow-lg shadow-gray-100 border border-gray-200"
  >
    <button
      v-for="item in items"
      :key="item.key"
      @click="item.action"
      class="py-2 px-2 text-sm bg-white rounded-lg group hover:bg-gray-100"
    >
      <component
        :is="item.icon"
        class="w-5 h-5 text-gray-800 group-hover:text-red-500"
      />
    </button>
  </div>
</template>
