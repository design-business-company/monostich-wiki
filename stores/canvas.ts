import { defineStore } from "pinia";
import { eventBus } from "@/assets/scripts/eventBus";

interface canvasData {
  adjective: string;
  noun: string;
  image: string;
}

interface CanvasState {
  data: canvasData | null;
}

export const useCanvasStore = defineStore("canvas", {
  state: (): CanvasState => ({
    data: {
      adjective: "Wiki",
      noun: "Monostich",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/300px-Wikipedia-logo-v2.svg.png",
    },
  }),
  actions: {
    saveCanvasData(combo: canvasData) {
      this.data = combo;
    },
    saveToCanvas() {
      eventBus.emit("draw-canvas");
    },
  },
});
