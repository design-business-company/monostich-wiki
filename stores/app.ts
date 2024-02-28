import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    appHasLoaded: false as boolean | false,
    route: null as object | null,
    routeIsTransitioning: true as boolean | true,
  }),
  actions: {
    setAppHasLoaded(loaded: boolean) {
      this.appHasLoaded = loaded;
    },
    setRoute(route: object) {
      this.route = route;
    },
    setRouteIsTransitioning(transitioning: boolean) {
      this.routeIsTransitioning = transitioning;
    },
  },
});
