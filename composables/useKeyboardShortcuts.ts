import { onMounted, onUnmounted } from "vue";

export function useKeyboardShortcuts(shortcuts: Record<string, Function>) {
  const handleKeydown = (event: KeyboardEvent) => {
    if (shortcuts[event.key]) {
      shortcuts[event.key]();
      event.preventDefault();
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
}
