<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
const context = ref<CanvasRenderingContext2D | null>(null);

const props = defineProps({
  showGrid: {
    type: Boolean,
    default: true,
  },
});

function setupCanvas() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  }
}

function registerEventListeners() {
  window.addEventListener("resize", () => {
    setupCanvas();
    props.showGrid && drawGrid();
  });
}

function drawGrid() {
  const gridSize = 50;

  if (context.value) {
    context.value.fillStyle = "rgba(0, 0, 0, .2)";

    for (let i = 0; i * gridSize < canvas.value?.width!; i++) {
      for (var j = 0; j * gridSize < canvas.value?.height!; j++) {
        if (i > 0 && j > 0) {
          context.value.beginPath();
          context.value.rect(i * gridSize, j * gridSize, 2, 2);
          context.value.fill();
          context.value.closePath();
        }
      }
    }
  }
}

onMounted(() => {
  context.value = canvas.value?.getContext("2d")!;

  registerEventListeners();
  setupCanvas();
  props.showGrid && drawGrid();
});
</script>

<template>
  <canvas class="w-screen h-screen" ref="canvas"></canvas>
</template>
