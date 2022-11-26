import { ref, onMounted, onUnmounted } from "vue";

export function useMouse() {
  const x = ref<Number | null>(null);
  const y = ref<Number | null>(null);

  function update(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
}
