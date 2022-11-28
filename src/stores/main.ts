import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  const shouldClear = ref(false);

  const selectedSize = ref(14);
  const sizes = ref([8, 14, 24, 32]);
  const selectedColor = ref("#2d13f7");
  const colors = ref([
    "#d4f713",
    "#13f7ab",
    "#13f3f7",
    "#13c5f7",
    "#138cf7",
    "#1353f7",
    "#2d13f7",
    "#7513f7",
    "#a713f7",
    "#d413f7",
    "#f713e0",
    "#f71397",
    "#f7135b",
    "#f71313",
    "#f76213",
    "#f79413",
    "#f7e013",
  ]);

  function setSize(newSize: number) {
    selectedSize.value = newSize;
  }

  function setColor(newColor: string) {
    selectedColor.value = newColor;
  }

  function setShouldClear(newValue: boolean) {
    shouldClear.value = newValue;
  }

  return {
    shouldClear,
    selectedSize,
    sizes,
    selectedColor,
    colors,
    setSize,
    setColor,
    setShouldClear,
  };
});
