import { ref, onMounted, onUnmounted } from "vue";

export function useMouse() {
  const x = ref<number | null>(null);
  const y = ref<number | null>(null);
  const isMouseDown = ref<boolean | null>(false);

  function updateCoordinates(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  function updateIsMouseDown(value: boolean) {
    isMouseDown.value = value;
  }

  onMounted(() => {
    window.addEventListener("mousemove", updateCoordinates);
    window.addEventListener("mousedown", () => updateIsMouseDown(true));
    window.addEventListener("mouseup", () => updateIsMouseDown(false));
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", updateCoordinates);
    window.removeEventListener("mousedown", () => updateIsMouseDown(true));
    window.removeEventListener("mouseup", () => updateIsMouseDown(false));
  });

  return { x, y, isMouseDown };
}
