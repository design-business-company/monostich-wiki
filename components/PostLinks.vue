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

    <IconButton @click="saveContent">
      <template #icon>
        <IconDownload />
      </template>
      <template #text>Save</template>
    </IconButton>
  </div>
</template>

<script>
export default {
  props: {
    combo: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.imageString);
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
    saveContent() {
      console.log("Saving content...");
    },
  },
};
</script>

<style scoped>
.links {
  display: flex;
  justify-content: center;
  gap: 0.45em;
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
