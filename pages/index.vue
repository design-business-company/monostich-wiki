<template>
  <div>
    <div class="saveme">
      <PostCanvas :data="monostichData" />
    </div>

    <div class="posts">
      <Post
        v-for="(combo, index) in data.combos"
        :key="`combo-${index}`"
        :combo="combo"
      />
    </div>
  </div>
</template>

<script setup>
import PageSetup from "~/composables/PageSetup";
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useCanvasStore } from "@/stores/canvas";
import { eventBus } from "~/assets/scripts/eventBus";

const canvasStore = useCanvasStore();
const monostichData = computed(() => canvasStore.data);

// async function saveCanvas() {
//   await nextTick();
//   postCanvasRef.value.saveCanvasAsImage();
// }

// onMounted(() => {
//   eventBus.on("draw-canvas", saveCanvas);
// });

// onUnmounted(() => {
//   eventBus.off("draw-canvas", saveCanvas);
// });

const { data } = await useFetch("/api/combos");

// Run common mount/unmount scripts. Seup SEO, etc.
PageSetup({
  seoMeta: { title: "Index" },
});

// Define page transitions or other page meta
definePageMeta({
  pageTransition: pageTransitionDefault(),
});
</script>

<style lang="scss">
.saveme {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 320px;
  height: 320px;
  z-index: 999;
  display: none;
}
</style>
