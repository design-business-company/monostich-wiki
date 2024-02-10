<template>
  <div>
    <Post
      v-for="(combo, index) in data.combos"
      :key="`combo-${index}`"
      :combo="combo"
    />
  </div>
</template>

<script setup>
import PageSetup from "~/composables/PageSetup";
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";

const { data } = await useFetch("/api/combos");

// Run common mount/unmount scripts. Seup SEO, etc.
PageSetup({
  seoMeta: { title: "Index" },
});

// Define page transitions or other page meta
definePageMeta({
  pageTransition: pageTransitionDefault(),
});
</script>
