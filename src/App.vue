<script setup lang="ts">
import { useStore } from "@/stores/main";
import TheTitle from "@/components/TheTitle.vue";
import TheCursor from "@/components/TheCursor.vue";
import TheCanvas from "@/components/TheCanvas.vue";
import TheControls from "@/components/TheControls.vue";

useStore();
</script>

<template>
  <div class="flex justify-center cursor-none">
    <TheTitle />
    <TheCursor />
    <TheCanvas />
    <TheControls />
  </div>
</template>
