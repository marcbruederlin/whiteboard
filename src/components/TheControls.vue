<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  ArrowUturnLeftIcon,
  PencilIcon,
  SwatchIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";
import TheSizePanel from "./panels/TheSizePanel.vue";
import TheColorPanel from "./panels/TheColorPanel.vue";

const items = [
  {
    key: "size",
    icon: PencilIcon,
    panel: TheSizePanel,
  },
  {
    key: "color",
    icon: SwatchIcon,
    panel: TheColorPanel,
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
    class="absolute flex items-center bottom-10 px-8 py-2 gap-x-2 rounded-full bg-white shadow-lg shadow-gray-100 border border-gray-200"
  >
    <template v-for="item in items" :key="item.key">
      <template v-if="item.panel">
        <Popover class="relative">
          <PopoverButton
            class="py-2 px-2 text-sm bg-white rounded-lg group hover:bg-gray-100 outline-red-500"
          >
            <component
              :is="item.icon"
              class="w-5 h-5 text-gray-800 group-hover:text-red-500"
            />
          </PopoverButton>

          <PopoverPanel
            class="absolute z-10 bottom-12 py-5 px-8 bg-white text-sm shadow-lg shadow-gray-100 border border-gray-200"
          >
            <component :is="item.panel" />
          </PopoverPanel>
        </Popover>
      </template>
      <template v-else>
        <button
          @click="item.action"
          class="py-2 px-2 text-sm bg-white rounded-lg group hover:bg-gray-100"
        >
          <component
            :is="item.icon"
            class="w-5 h-5 text-gray-800 group-hover:text-red-500"
          />
        </button>
      </template>
    </template>
  </div>
</template>
