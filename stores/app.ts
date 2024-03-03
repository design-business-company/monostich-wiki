import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    appHasLoaded: false as boolean | false,
    route: null as object | null,
    routeIsTransitioning: true as boolean | true,
    activeIndex: -1 as number | -1,
  }),
  actions: {
    setAppHasLoaded(loaded: boolean) {
      this.appHasLoaded = loaded;
    },
    setRoute(route: object) {
      this.route = route;
      // let's also reset index on page load
      this.activeIndex = -1;
    },
    setRouteIsTransitioning(transitioning: boolean) {
      this.routeIsTransitioning = transitioning;
    },
    setActiveIndex(index: number) {
      this.activeIndex = index;
    },
    incrementActiveIndex() {
      this.setActiveIndex(this.activeIndex + 1);
    },
    decrementActiveIndex() {
      if (this.activeIndex <= -1) return;
      this.setActiveIndex(this.activeIndex - 1);
    },
  },
});
