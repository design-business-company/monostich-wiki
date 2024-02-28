<template>
  <NuxtLayout class="site-layout">
    <NuxtPage class="site-page" />
  </NuxtLayout>
</template>

<script setup>
import { useRouteWatcher } from "~/composables/RouteWatcher";
useRouteWatcher();
</script>

<style>
#icon__nuxt,
.site-layout,
.site-page,
.site-content {
  min-height: 100dvh;
  display: flex;
}
</style>
