<template>
  <nav>
    <NuxtLink :to="linkPath" class="fab">
      <div class="fab__content">
        <transition name="fade">
          <span v-if="appStore.route === '/'">
            <IconInfo />
          </span>
          <span v-else>
            <IconHome />
          </span>
        </transition>
      </div>
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
  z-index: 999;
}

.fab {
  padding: var(--unit-big);
  pointer-events: all;
  display: inline-flex;
  padding: calc(var(--unit-big) - var(--unit-smaller));

  &:hover .fab__content {
    background-color: var(--color-interactive);
  }

  &__content {
    padding: 1em;
    width: clamp(32px, 3vw, 44px);
    height: clamp(32px, 3vw, 44px);
    border-radius: clamp(32px, 3vw, 44px);
    background-color: var(--color-background-light);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-color 150ms ease-in-out;

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
