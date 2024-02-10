<template>
  <div class="wrap">
    <IconButton url="https://example.com">
      <template #icon><IconLink /></template>
      <template #text>Wiki</template>
    </IconButton>

    <IconButton>
      <template #icon><IconDownload /></template>
      <template #text>Save</template>
    </IconButton>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  width: 100%;
}
</style>
