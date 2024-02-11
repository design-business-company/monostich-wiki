<template>
  <Observer
    :onEnter="onEnter"
    :onLeave="onLeave"
    :options="{ rootMargin: '200px' }"
  >
    <article
      class="monostich"
      ref="post"
      :class="[{ 'is-active': imageIsVisible }, { 'is-visible': isInView }]"
    >
      <PostHeader
        v-if="image"
        ref="postTitle"
        @click.stop="toggle"
        :adjective="combo.adjective"
        :noun="combo.noun"
      />

      <Observer :onEnter="onDrawerEnter" :once="true">
        <div ref="postDrawer" class="pair__drawer" v-if="image">
          <figure class="monostich__figure">
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
      </Observer>
    </article>
  </Observer>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { FetchWikiImage } from "~/composables/FetchWikiImage";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const props = defineProps({
  combo: {
    type: Object,
    required: true,
  },
});
const { image, getImage } = FetchWikiImage();
const post = ref(null);
const postTitle = ref(null);
const postDrawer = ref(null);
const imageIsVisible = ref(false);
const isInView = ref(false);

const onEnter = () => {
  gsap.fromTo(
    post.value,
    {
      opacity: 0.2,
    },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power3.inOut",
    }
  );
};

const onLeave = () => {
  gsap.to(post.value, {
    opacity: 0.2,
  });
};

const onDrawerEnter = async (el) => {
  await getImage(props.combo.imageQueryString);
};

function show() {
  imageIsVisible.value = true;

  const image = postDrawer.value.querySelector("img");
  const height = image.getBoundingClientRect().height;
  const tl = gsap.timeline();

  // Start both animations at the same time
  tl.to(
    window,
    {
      scrollTo: post.value.offsetTop,
      duration: 0.8,
      ease: "power3.inOut",
    },
    "<"
  ) // Start at the same time as the timeline starts

    // drawer
    .fromTo(
      postDrawer.value,
      {
        paddingBottom: 0,
      },
      {
        paddingBottom: 24,
        width: "100%",
        duration: 0.8,
        ease: "power3.inOut",
        maxHeight: height + 100,
        onComplete: () => {
          gsap.set(postDrawer.value, {
            maxHeight: "100vh",
          });
        },
      },
      "<"
    )

    // header
    .fromTo(
      postTitle.value.$el,
      {
        padding: "0 0",
      },
      {
        padding: "0 0",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "<"
    )

    // image
    .fromTo(
      image,
      {
        // transformOrigin: "top center",
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,

        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "<"
    );
}

function hide() {
  imageIsVisible.value = false;

  const image = postDrawer.value.querySelector("img");
  const tl = gsap.timeline();

  // Start both animations at the same time
  tl.to(
    postDrawer.value,
    {
      maxHeight: 0,
      paddingBottom: 0,
      duration: 0.8,
      ease: "power3.inOut",
    },
    "<"
  )

    // header
    .to(
      postTitle.value.$el,
      {
        padding: "0",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "<"
    )

    // image
    .to(
      image,
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "<"
    );
}

function toggle() {
  imageIsVisible.value ? hide() : show();
}
</script>

<style lang="scss" scoped>
.monostich {
  opacity: 0.2;
}

.is-active {
  &::v-deep(h1) {
    color: var(--color-foreground);
  }
}

.pair__drawer {
  overflow: hidden;
  position: relative;
  max-height: 0;
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
