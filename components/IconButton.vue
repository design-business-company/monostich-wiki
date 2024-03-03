<template>
  <div class="button">
    <button v-if="!url" @click="onClick">
      <div class="content">
        <slot name="icon"></slot>
        <slot name="text"></slot>
      </div>
    </button>
    <a v-else :href="url" @click.stop="onClick" target="_blank">
      <div class="content">
        <slot name="icon"></slot>
        <slot name="text"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.button {
  font-size: 12px;

  @media (min-width: 1440px) {
    @include fluidScale(12px, 16px, 1440px);
  }
}

button,
a {
  display: flex;
  align-items: flex-start;
  appearance: none;
  border: 0;
  background: 0;
  cursor: pointer;
  min-height: 44px;
  padding: 0;
  padding-top: var(--unit-small);
  padding-bottom: var(--unit-small);
  margin: 0;
  text-decoration: none;
  outline: none;
  font-size: 100%;

  .content {
    background-color: var(--color-background-light);
    color: var(--color-foreground);
    transition: color 0.2s ease-out, background-color 0.2s ease-out;

    font-family: "System85", Courier, monospace;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1;

    padding: 0.5em 0.75em 0.5em 0.6em;
    gap: 0.5em;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.25rem;
  }

  ::v-deep(svg) {
    stroke-width: 1.4;
    stroke: var(--color-interactive);
    transition: stroke 0.2s ease-out;
    flex: none;
    width: 1.25em;
    height: 1.25em;
  }

  &:focus-visible .content {
    box-shadow: 0 0 0 1px var(--color-interactive);
  }

  &:hover {
    .content {
      background-color: var(--color-interactive);
    }

    ::v-deep(svg) {
      stroke-width: 1.2;
      stroke: var(--color-foreground);
    }
  }
}

/* Add more styles as needed */
</style>
