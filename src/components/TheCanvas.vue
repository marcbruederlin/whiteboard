<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/main";

const props = withDefaults(
  defineProps<{
    showGrid?: boolean;
  }>(),
  {
    showGrid: true,
  }
);

const store = useStore();
const { setShouldClear } = store;
const { selectedColor, selectedSize } = storeToRefs(store);
const isDrawing = ref(false);
const startX = ref();
const startY = ref();
const canvas = ref<HTMLCanvasElement | null>(null);
const context = ref<CanvasRenderingContext2D | null>();

function setupCanvas() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    if (props.showGrid) {
      drawCanvasGrid();
    }
  }
}

function drawCanvasGrid() {
  const gridSize = 50;

  if (context.value) {
    context.value.fillStyle = "rgba(0, 0, 0, .2)";

    for (let i = 0; i * gridSize < canvas.value?.width! - 40; i++) {
      for (var j = 0; j * gridSize < canvas.value?.height! - 40; j++) {
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

function clearCanvas() {
  if (canvas.value) {
    context.value?.clearRect(0, 0, canvas.value?.width, canvas.value?.height);
    drawCanvasGrid();
    setShouldClear(false);
  }
}

function startDrawing(event: MouseEvent) {
  console.log(event.clientX);

  isDrawing.value = true;
  startX.value = event.clientX;
  startY.value = event.clientY;

  if (context.value) {
    context.value.beginPath();
  }
}

function draw(event: MouseEvent) {
  if (!isDrawing.value) {
    return;
  }

  if (context.value) {
    context.value.lineWidth = selectedSize.value;
    context.value.lineCap = "round";
    context.value.strokeStyle = selectedColor.value;

    context.value.lineTo(event.clientX, event.clientY);
    context.value.stroke();
  }
}

function endDrawing() {
  isDrawing.value = false;
  context.value?.stroke();
  context.value?.beginPath();
}

store.$subscribe((_, state) => {
  if (state.shouldClear) {
    clearCanvas();
  }
});

onMounted(() => {
  context.value = canvas.value?.getContext("2d")!;

  window.addEventListener("resize", setupCanvas);

  canvas.value?.addEventListener("mousedown", startDrawing);
  canvas.value?.addEventListener("mousemove", draw);
  canvas.value?.addEventListener("mouseup", endDrawing);

  setupCanvas();
});

onUnmounted(() => {
  window.removeEventListener("resize", setupCanvas);
  canvas.value?.removeEventListener("mousedown", startDrawing);
  canvas.value?.removeEventListener("mousemove", draw);
  canvas.value?.removeEventListener("mouseup", endDrawing);
});
</script>

<template>
  <canvas class="w-screen h-screen" ref="canvas"></canvas>
</template>
