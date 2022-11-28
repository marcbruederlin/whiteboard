<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import TheCursor from "@/components/TheCursor.vue";
import TheCanvas from "@/components/TheCanvas.vue";
import TheControls from "@/components/TheControls.vue";
</script>

<template>
  <div class="flex justify-center cursor-none">
    <TheTitle />
    <TheCursor />
    <TheCanvas />
    <TheControls />
  </div>
</template>
