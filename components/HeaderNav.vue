<template>
  <nav>
    <NuxtLink :to="linkPath" class="fab">
      <transition name="fade">
        <span v-if="appStore.route === '/'">
          <IconInfo />
        </span>
        <span v-else>
          <IconHome />
        </span>
      </transition>
    </NuxtLink>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "~/stores/app";

const appStore = useAppStore();

const linkPath = computed(() => {
  // Check the current route from the store and return the appropriate link path
  return appStore.route === "/" ? "/about" : "/";
});
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  margin-bottom: 2rem;
  z-index: 999;
  padding-left: 16px;
  padding-top: 16px;
}

.fab {
  pointer-events: all;
  width: 44px;
  height: 44px;
  border-radius: 44px;
  background-color: var(--color-background-light);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: var(--color-interactive);
  }

  > span {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::v-deep(svg) {
      display: block;
      width: 60%;
      height: 60%;
    }

    &::v-deep(path) {
      stroke: var(--color-fab-icon);
      stroke-width: 1.5px;
    }

    &::v-deep(circle) {
      fill: var(--color-fab-icon);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.icon {
  /* Icon styling */
}
</style>
