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
  display: flex;
  justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  // padding-right: var(--unit-big);
  // padding-left: var(--unit-big);
  width: 100%;
  letter-spacing: -0.0125em;
  color: var(--color-interactive);
  line-height: 1;
  transition: color 0.4s ease-out;
  gap: 0.05em;
  font-size: 44px;

  @include fluidScale(44px, 44px, 500px);

  @media (min-width: 768px) {
    gap: 0.05em;
    @include fluidScale(64px, 64px, 768px);
  }

  &:hover {
    color: var(--color-foreground);
    cursor: pointer;
  }
}

.adjective {
  text-align: right;
}

.noun {
  text-transform: uppercase;
}
</style>
