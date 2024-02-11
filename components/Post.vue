<template>
  <article
    class="pair"
    :class="[{ 'is-active': imageIsVisible }, { 'is-visible': isInView }]"
    ref="post"
  >
    <PostHeader
      @click.stop="toggle"
      :adjective="combo.adjective"
      :noun="combo.noun"
      v-if="image"
    />

    <div class="pair__drawer" v-if="image">
      <figure>
        <Pic
          @click.stop="toggle"
          :source="image.source"
          :alt="combo.imageQueryString"
          :width="image.width"
          :height="image.height"
        />
      </figure>

      <PostLinks :combo="combo" :image="image.source" />
    </div>
  </article>
</template>

<script>
import { FetchWikiImage } from "~/composables/FetchWikiImage";

export default {
  data() {
    return {
      imageIsVisible: false,
      imageQuerySize: 1024,
      image: null,
      observer: null,
      observerOptions: { rootMargin: `100% 0px`, threshold: 0 },
      observerAnimation: null,
      isInView: false,
    };
  },
  props: {
    combo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { image, getImage } = FetchWikiImage();

    return { image, getImage };
  },
  mounted() {
    this.$nextTick(() => {
      this.observer = new IntersectionObserver(
        this.observerLazyLoad,
        this.observerOptions
      );
      this.observer.observe(this.$refs.post);
    });
  },
  methods: {
    observerLazyLoad(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          this.getImage(this.combo.imageQueryString);
          this.observer.unobserve(this.$refs.post, this.observerOptions);
        }
      });
    },
    observerAnimationCallback(entries) {
      entries.map((entry) => {
        entry.isIntersecting ? (this.isInView = true) : (this.isInView = false);
      });
    },
    show() {
      this.$el.scrollIntoView();
      this.imageIsVisible = true;
    },
    hide() {
      this.imageIsVisible = false;
    },
    toggle() {
      this.imageIsVisible ? this.hide() : this.show();
    },
  },
};
</script>

<style scoped>
.is-active {
  &::v-deep(h1) {
    color: var(--color-foreground);
  }
}

.pair__drawer {
  overflow: hidden;
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
  max-height: 0;
  opacity: 0;
  transition: max-height 450ms ease-in-out, opacity 250ms 100ms ease-out,
    padding 400ms ease-in-out;
  padding: 0;
}
.is-active .pair__drawer {
  max-height: 100vh;
  opacity: 1;
  /* padding-top: 8px; */
  padding-bottom: 16px;
}

.pair__drawer img {
  max-height: 75vh;
  height: 100%;
  width: auto;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.95);
  transition: transform 350ms ease-in-out;
  object-fit: contain;
}
.is-active .pair__drawer img {
  transform: translate3d(0, 0, 0) scale(1);
}

.pair__drawer figcaption {
  position: relative;
  z-index: 100;
  /* top: 0.5em; */
  /* left: 0.5em; */
  /* right: 0.5em;  */
  display: flex;
  justify-content: center;
}
</style>
