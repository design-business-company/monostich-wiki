import { reactive } from "vue";

interface EventBus {
  emit: (event: string, ...args: any[]) => void;
  on: (event: string, callback: Function) => void;
  off: (event: string, callback?: Function) => void;
}

const bus = reactive({}) as Record<string, Function[]>;

export const eventBus: EventBus = {
  emit(event, ...args) {
    if (bus[event]) {
      bus[event].forEach((callback) => callback(...args));
    }
  },
  on(event, callback) {
    if (!bus[event]) {
      bus[event] = [];
    }
    bus[event].push(callback);
  },
  off(event, callback) {
    if (!bus[event]) return;
    if (!callback) {
      bus[event] = [];
    } else {
      bus[event] = bus[event].filter((cb) => cb !== callback);
    }
  },
};
