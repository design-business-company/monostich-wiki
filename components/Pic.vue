<template>
  <img
    ref="pic"
    class="pic"
    :class="[
      { 'is-loading': !hasLoaded && !hasErrored },
      { 'has-loaded': hasLoaded },
      { 'has-errored': hasErrored },
    ]"
    :alt="alt"
    :width="width"
    :height="height"
    @load="onLoad($event)"
    @error="onError($event)"
    loading="lazy"
  />
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
      default: null,
    },
    loading: {
      type: String,
      required: false,
      default: "lazy",
    },
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      hasLoaded: null,
      hasErrored: null,
      observer: null,
      observerOptions: { rootMargin: `100% 0px`, threshold: 0 },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.observer = new IntersectionObserver(
        this.observerCallback,
        this.observerOptions
      );
      this.observer.observe(this.$refs.pic);
    });
  },
  beforeDestroy() {
    this.observer.unobserve(this.$refs.pic, this.observerOptions);
  },
  methods: {
    onLoad(ev) {
      this.hasLoaded = true;
      this.$emit("load", ev);
    },
    onError(ev) {
      this.hasErrored = true;
      this.$emit("error", ev);
    },
    setSource() {
      if (!this.$refs.pic.src) {
        this.$refs.pic.src = this.source;
      }
    },
    inView() {
      this.setSource();
      window.$observer.unobserve(this.$refs.pic, this.observerOptions);
    },
    observerCallback(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          this.setSource();
          this.observer.unobserve(this.$refs.pic, this.observerOptions);
        }
      });
    },
  },
};
</script>

<style>
.pic {
  display: block;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 400ms ease-out;
  cursor: pointer;
}

.pic.has-loaded {
  opacity: 1;
}

/* &.is-loading {} */
/* &.has-errored {} */
</style>
