import { defineStore } from "pinia";

interface canvasData {
  adjective: string;
  noun: string;
  image: string;
}

interface CanvasState {
  triggerSaveOnChange: number;
  data: canvasData | null;
}

export const useCanvasStore = defineStore("canvas", {
  state: (): CanvasState => ({
    triggerSaveOnChange: 0,
    data: {
      adjective: "MONOSTICH",
      noun: "Wiki",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/300px-Wikipedia-logo-v2.svg.png",
    },
  }),
  actions: {
    saveCanvasData(combo: canvasData) {
      this.data = combo;
    },
    saveCanvas() {
      // this num is watced in PostCanvas. when changed, it saves the canvas as png
      this.triggerSaveOnChange += 1;
    },
  },
});
