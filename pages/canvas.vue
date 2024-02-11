<template>
  <div class="wrap">
    <PostCanvas
      ref="postCanvasRef"
      v-if="monostichData"
      :data="monostichData"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { eventBus } from "~/assets/scripts/eventBus";

const monostichData = ref();
const postCanvasRef = ref(null);

function saveCanvas(data) {
  monostichData.value = data;

  if (postCanvasRef.value) {
    postCanvasRef.value.saveCanvasAsImage();
  }
}

onMounted(() => {
  eventBus.on("draw-canvas", saveCanvas);
});

onUnmounted(() => {
  eventBus.off("draw-canvas", saveCanvas);
});
</script>
