<template>
  <header :class="['site-header', { 'is-visible': headerIsVisible }]">
    <div class="wrapper">
      <HeaderNav />
      <Debug v-if="isDev" />
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useDeviceStore } from "~/stores/device";
const isDev = process.dev;

const deviceStore = useDeviceStore();
const headerIsVisible = ref(true);

// watch main window event
const nuxt = useNuxtApp();
const scroll = nuxt.$scroll;
const scrollEl = ref({});
const handleScroll = () => {
  if (
    deviceStore.scrollNearTop ||
    deviceStore.scrollAtTop ||
    deviceStore.scrollNearBottom ||
    deviceStore.scrollAtBottom ||
    deviceStore.scrollDirection === "up"
  ) {
    headerIsVisible.value = true;
  } else {
    headerIsVisible.value = false;
  }
};

onMounted(() => {
  scrollEl.value = scroll.instance.el;
  scrollEl.value.addEventListener("scrollY", handleScroll);
});

onUnmounted(() => {
  scrollEl.value.removeEventListener("scrollY", handleScroll);
});
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  pointer-events: none;

  &:hover .wrapper {
    transform: translate3d(0, 0, 0);
  }

  .wrapper {
    transition: transform 300ms ease-out;
    transform: translate3d(0, -150%, 0);
  }

  &.is-visible .wrapper {
    transform: translate3d(0, 0, 0);
  }
}
</style>
