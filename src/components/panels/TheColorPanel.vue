<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/main";

const store = useStore();
const { colors } = storeToRefs(store);
</script>

<template>Color</template>
