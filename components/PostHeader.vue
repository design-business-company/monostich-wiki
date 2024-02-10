<template>
  <header>
    <h1>
      <span class="adjective">{{ adjective }}&nbsp;</span>
      <span class="noun">{{ noun }}</span>
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    adjective: {
      type: String,
      default: "",
    },
    noun: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

h1 {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  letter-spacing: -0.0125em;
  color: var(--color-interactive);
  font-size: 44;
  transition: color 0.4s ease-out;
  padding: 0.05em 0;
  @include fluidScale(44px, 36px, 375px);

  @media (min-width: 500px) {
    @include fluidScale(68px, 56px, 700px);
  }

  &:hover {
    color: var(--color-foreground);
    cursor: pointer;
  }
}

.adjective {
  text-align: right;
  padding-left: 0.25em;
}

.noun {
  text-transform: uppercase;
  padding-right: 0.25em;
}
</style>
