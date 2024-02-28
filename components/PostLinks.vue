<template>
  <div class="links">
    <IconButton :url="wikiUrl">
      <template #icon>
        <IconLink />
      </template>
      <template #text
        ><span class="truncate">{{ imagePretty }}</span></template
      >
    </IconButton>

    <IconButton @click="saveMonostich">
      <template #icon>
        <IconDownload />
      </template>
      <template #text>Save</template>
    </IconButton>
  </div>
</template>

<script>
import { useCanvasStore } from "@/stores/canvas";

export default {
  props: {
    combo: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageString() {
      const string = this.combo.imageQueryString;
      return string.split(" ").join("_");
    },
    imagePretty() {
      let string = this.combo.imageQueryString; // Use 'let' for reassignment
      const prefix = "File:";

      // Remove 'File:' prefix if present
      if (string.startsWith(prefix)) {
        string = string.substring(prefix.length);
      }

      // Find the last period in the string to remove the extension
      const lastPeriodIndex = string.lastIndexOf(".");
      if (lastPeriodIndex !== -1) {
        string = string.substring(0, lastPeriodIndex);
      }

      // Replace underscores with spaces and return the modified string
      return string.split("_").join(" ");
    },
    wikiUrl() {
      return `https://en.wikipedia.org/wiki/${this.imageString}`;
    },
  },
  methods: {
    saveMonostich(event) {
      event.stopPropagation();

      const canvasStore = useCanvasStore();
      canvasStore.saveCanvasData({
        adjective: this.combo.adjective,
        noun: this.combo.noun,
        image: this.image,
      });

      canvasStore.saveToCanvas();
    },
  },
};
</script>

<style scoped>
.links {
  display: flex;
  justify-content: center;
  gap: var(--unit-small);
}

.truncate {
  max-width: 200px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
}
</style>
