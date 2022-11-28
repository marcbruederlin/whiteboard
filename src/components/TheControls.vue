<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  ArrowUturnLeftIcon,
  PencilIcon,
  SwatchIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";
import { useStore } from "@/stores/main";
import SizePanel from "./panels/SizePanel.vue";
import ColorPanel from "./panels/ColorPanel.vue";

const store = useStore();
const { setShouldClear } = store;

const items = [
  {
    key: "size",
    title: "Size",
    icon: PencilIcon,
    panel: SizePanel,
  },
  {
    key: "color",
    title: "Color",
    icon: SwatchIcon,
    panel: ColorPanel,
  },
  {
    key: "undo",
    title: "Undo",
    icon: ArrowUturnLeftIcon,
    action: () => console.log("Undo last action"),
  },
  {
    key: "clear",
    title: "Clear",
    icon: XCircleIcon,
    action: () => setShouldClear(true),
  },
];
</script>

<template>
  <div
    class="absolute flex items-center bottom-10 px-8 py-2 gap-x-2 rounded-full bg-white shadow-lg shadow-gray-100 border border-gray-200 cursor-auto"
  >
    <template v-for="item in items" :key="item.key">
      <Popover class="relative" v-if="item.panel">
        <PopoverButton
          :title="item.title"
          class="py-2 px-2 text-sm bg-white rounded-lg group hover:bg-gray-100 outline-red-500"
        >
          <component
            :is="item.icon"
            class="w-6 h-6 text-gray-800 group-hover:text-red-500"
          />
        </PopoverButton>

        <PopoverPanel
          class="absolute z-10 bottom-14 p-4 bg-white text-sm shadow-lg shadow-gray-100 border border-gray-200 rounded-md"
        >
          <component :is="item.panel" />
        </PopoverPanel>
      </Popover>
      <button
        v-else
        :title="item.title"
        @click="item.action"
        class="py-2 px-2 text-sm bg-white rounded-lg group hover:bg-gray-100"
      >
        <component
          :is="item.icon"
          class="w-6 h-6 text-gray-800 group-hover:text-red-500"
        />
      </button>
    </template>
  </div>
</template>
