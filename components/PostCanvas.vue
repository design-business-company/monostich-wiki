<template>
  <div>
    <canvas ref="canvasEl" width="1920" height="1920"></canvas>
    <a ref="downloadLink" style="display: none"></a>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useCanvasStore } from "@/stores/canvas";

const canvasStore = useCanvasStore();

defineExpose({
  saveCanvasAsImage,
});

const canvasEl = ref(null);
const downloadLink = ref(null);

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function redrawCanvas() {
  const canvas = canvasEl.value;
  if (!canvas || !canvasStore.data) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Clear the canvas before redrawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const { adjective, noun, image } = canvasStore.data;

  ctx.fillStyle = "black"; // Background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const img = await loadImage(image); // Use loadImage to ensure image is loaded
  const scale = Math.min(1280 / img.width, 1280 / img.height);
  const imgWidth = img.width * scale;
  const imgHeight = img.height * scale;
  const imgX = (canvas.width - imgWidth) / 2;
  const imgY = (canvas.height - imgHeight) / 2;

  ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);

  ctx.fillStyle = "#F4F3EF";
  ctx.font = "176px 'Frankie'";
  ctx.textAlign = "center";

  const text = `${adjective} ${noun.toUpperCase()}`;
  ctx.fillText(text, canvas.width / 2, 176);

  await drawFooter(canvas, ctx); // Wait for footer to be drawn before proceeding
}

function drawFooter(canvas, ctx) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const targetWidth = canvas.width;
      const targetHeight = targetWidth / aspectRatio;
      const xPos = (canvas.width - targetWidth) / 2;
      const yPos = canvas.height - targetHeight;

      ctx.drawImage(img, xPos, yPos, targetWidth, targetHeight);
      resolve(); // Resolve the promise after the image is drawn
    };
    img.onerror = reject;
    img.src = "/monostich-footer.png";
  });
}

async function saveCanvasAsImage() {
  await redrawCanvas();
  const canvas = canvasEl.value;
  if (!canvas) return;

  const imageData = canvas.toDataURL("image/png");

  // Use the referenced <a> tag for downloading
  if (downloadLink.value) {
    const filename = `Monostich.wiki - ${canvasStore.data.adjective} ${canvasStore.data.noun}.png`;

    downloadLink.value.href = imageData;
    downloadLink.value.download = filename;
    downloadLink.value.click();
  }
}

onMounted(async () => {
  await redrawCanvas();
});

// this value changes when the save button within postLinks button is clicked
watch(
  () => canvasStore.triggerSaveOnChange,
  async (newVal, oldVal) => {
    await redrawCanvas();

    saveCanvasAsImage();
  }
);
</script>

<style scoped>
canvas {
  width: 100%;
  height: auto;
}
</style>
