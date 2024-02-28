<template>
  <Observer :onEnter="onEnter" :once="true">
    <img
      ref="pic"
      class="pic"
      :alt="alt"
      :width="width"
      :height="height"
      @load="onLoad"
      @error="onError"
      :loading="loading"
    />
  </Observer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Define your emits
const emit = defineEmits(["load", "error"]);

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
    default: null,
  },
  loading: {
    type: String,
    required: false,
    default: "lazy",
  },
  width: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
});

const pic = ref(null);
const hasLoaded = ref(false);
const hasErrored = ref(false);

function onLoad(event) {
  hasLoaded.value = true;
  emit("load", event);
}

function onError(event) {
  hasErrored.value = true;
  emit("error", event);
}

function onEnter(event) {
  setSource();
}

function setSource() {
  pic.value.src = props.source;
}
</script>

<style lang="scss" scoped>
.pic {
  display: flex;
  max-height: 70dvh;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  object-fit: contain;
  cursor: pointer !important;
  padding-left: var(--unit-small);
  padding-right: var(--unit-small);
}

/* Additional styles for .is-loading and .has-errored can be added here */
</style>
