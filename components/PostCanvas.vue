<template>
  <div>
    <canvas ref="canvasEl" width="1920" height="1920"></canvas>
    <!-- Hidden link for downloading the canvas image -->
    <a ref="downloadLink" style="display: none"></a>
  </div>
</template>

<script setup>
import {
  onMounted,
  ref,
  watch,
  defineProps,
  defineExpose,
  nextTick,
} from "vue";

defineExpose({
  saveCanvasAsImage,
});

const props = defineProps({
  data: {
    type: Object,
    default: {},
    required: true,
  },
});

const canvasEl = ref(null);
const downloadLink = ref(null);

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Use this if you're loading images from an external domain
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Refactor drawing logic into a separate function
function redrawCanvas() {
  const canvas = canvasEl.value;
  if (!canvas || !props.data) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { adjective, noun, image } = props.data;

  // Clear the canvas before redrawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black"; // Background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    const scale = Math.min(1280 / img.width, 1280 / img.height);
    const imgWidth = img.width * scale;
    const imgHeight = img.height * scale;
    const imgX = (canvas.width - imgWidth) / 2;
    const imgY = (canvas.height - imgHeight) / 2;

    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);

    ctx.fillStyle = "#4a462a";
    ctx.font = "176px 'Frankie'";
    ctx.textAlign = "center";

    const text = `${adjective} ${noun.toUpperCase()}`;
    ctx.fillText(text, canvas.width / 2, 176);

    drawFooter(canvas, ctx);
  };
  img.src = image;
}

function drawFooter(canvas, ctx) {
  const img = new Image();
  img.src = "/monostich-footer.png";

  img.onload = () => {
    const aspectRatio = img.width / img.height;
    const targetWidth = canvas.width;
    const targetHeight = targetWidth / aspectRatio;
    const xPos = (canvas.width - targetWidth) / 2;
    const yPos = canvas.height - targetHeight;

    ctx.drawImage(img, xPos, yPos, targetWidth, targetHeight);
  };
}

function saveCanvasAsImage() {
  const canvas = canvasEl.value;
  if (!canvas) return;

  const imageData = canvas.toDataURL("image/png");

  // Use the referenced <a> tag for downloading
  if (downloadLink.value) {
    const unixTime = Math.floor(Date.now() / 1000); // Get current time in Unix timestamp (seconds)
    const filename = `Monostich Wiki - ${props.data.adjective} ${props.data.noun}.png`;

    downloadLink.value.href = imageData;
    downloadLink.value.download = filename;
    downloadLink.value.click();
  }
}

onMounted(() => {
  redrawCanvas();
});

watch(
  () => props.data,
  (newVal, oldVal) => {
    redrawCanvas();

    setTimeout(() => {
      saveCanvasAsImage();
    }, 50);
  }
);
</script>

<style scoped>
canvas {
  width: 100%;
  height: auto;
}
</style>
