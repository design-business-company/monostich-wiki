<template>
  <div>
    <div class="saveme">
      <PostCanvas :data="monostichData" />
    </div>

    <div class="posts">
      <Post
        v-for="(combo, index) in data.combos"
        ref="postsRef"
        :key="`combo-${index}`"
        :combo="combo"
      />
    </div>
  </div>
</template>

<script setup>
import PageSetup from "~/composables/PageSetup";
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";
import { useCanvasStore } from "@/stores/canvas";

const canvasStore = useCanvasStore();
const monostichData = computed(() => canvasStore.data);
const { data } = await useFetch("/api/combos");

// Run common mount/unmount scripts. Setup SEO, etc.
PageSetup({
  seoMeta: {
    title: "Monostich Wiki",
    description:
      "'In all chaos there is a cosmos, in all disorder a secret order.' - Carl Jung",
    image:
      "https://egstad.link/images/monostich-wiki/og-image.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIF2GB8ktx8QK3fUzMV2bHrv1BKjxb6RbRnC1c6zpmvu0AiEA2lzWoqGOx%2F6EvcgKEQCwAYb4U0m5K5%2F5JeBzAC8g%2F6kq8QII5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mjc3NTEwOTM0NjMiDJugnMfNOmH5oQfS9CrFAppthWGjhwGUjofvRtjuwkQOxXwA2pFABkbxl2l7QnjOKdxFb3L6PLv%2BoFSieDRMgxo35%2Bc%2FMwqmZbo%2B9PnCFTWFZpLD%2B3zwLuvSVDfAQsED2QF89x%2BLF%2FvKmxwrxdknpT0Zb42TcBAPtkNTAT87a6OvGoTvSNY1Xnj%2B65Ndb2XByKNEEyA81ArPJVoso9JzNVnd%2FekcGDVukENFXyLLMZ6abY%2BWAd3c7hqEJowYZ0szxHAk2f2JQCAnQpEmdzXPquvzz%2B7jaQWj%2BH%2B28O%2FETuViwizRzQCyEk4xRZsQDECuEpsR3oXe%2FGVmfgpAMGohqVDUeutY7yzK0j%2FhdXU5CxY9ThDMw6Iv1B6WnrzI%2FKX7QXjZNl1wYEBfolP9S4QMxqKhJFNrGQ45N3USZEoCGweRY8U%2BqHYiAxWc4URLJuKWYXNA3bgwk876rgY6swJAJ%2Bx9d9cpYQpaOFurzPkNsWi%2Fb8QbyDfNlmhlNiXM1D5SWtp2zhUx6Psdg3Ohzpm5BXpHaS0lNOlW2o3z9PNpLkzFBCzTFILXA%2BYVlctb8QE7xiFQF%2BGM7A18fM23dMeBk6ZOlBuefzCYMN3exdbLbGTJcnnUokhQJkvEL98o0vkrrA0q0HzIoDjt4SLiiI9LwihK4oGlwYscEpzcSD5%2BPdDA3%2Bh%2BWFHIgl%2F8OuxWADS%2By8xSUD59qOv8ZWSXGduiYrCf4AWPHS4mVo8UVSr6m3CQCs0cbT0jRClDNzJLJpJAmIm5QxEx4OeGx6e5PD6vUH346va4S1cl7C1Pz4fNaE%2Fb9fC61%2BtnY2Dyl87NtYA8HX7SBPV5tT2IamBKXl0H6OZW0M6YTQGK8TykdE83WE1m&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240228T032516Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZEKHBQTLR4ZFPGPT%2F20240228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=abe28ba3768700c68b9f505f768d7be402b018603595d5029ec8cc0978738b8b",
  },
});

// Define page transitions or other page meta
definePageMeta({
  pageTransition: pageTransitionDefault(),
});
</script>

<style lang="scss" scoped>
.posts {
  @media (max-width: 768px) {
    padding-top: calc(36px + var(--unit-small));
    padding-bottom: calc(36px + var(--unit-small));
  }
}

.saveme {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 320px;
  height: 320px;
  z-index: 999;
  display: none;
}
</style>
