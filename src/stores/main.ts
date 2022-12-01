import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  const defaultSize = localStorage.getItem("whiteboard:size") || 14;
  const defaultColor = localStorage.getItem("whiteboard:color") || "#2d13f7";

  const shouldClear = ref(false);

  const selectedSize = ref(+defaultSize);
  const sizes = ref([8, 14, 24, 32]);
  const selectedColor = ref(defaultColor);
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
    localStorage.setItem("whiteboard:size", `${newSize}`);
  }

  function setColor(newColor: string) {
    selectedColor.value = newColor;
    localStorage.setItem("whiteboard:color", newColor);
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
