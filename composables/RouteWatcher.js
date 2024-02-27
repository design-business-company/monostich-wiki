// composables/useRouteWatcher.js

import { watch } from "vue";
import { useRoute } from "#app";
import { useAppStore } from "~/stores/app";

export function useRouteWatcher() {
  const route = useRoute();
  const appStore = useAppStore();

  watch(
    () => route.path, // Watch for changes in the route path
    (newPath) => {
      appStore.setRoute(newPath); // Update the store with the new route path
    },
    { immediate: true } // Trigger the watcher immediately with the current route path
  );
}
