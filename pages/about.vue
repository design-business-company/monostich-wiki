<template>
  <div class="page-content">
    <div class="center-col">
      <IconLogo />
      <p>
        Monostich.wiki is a testament to the beauty of randomness and the human
        capacity to find meaning, humor, and insight in the most unexpected
        places. At its core, Wiki Monostich plays with the elements of chance by
        shuffling an adjective, a noun, and an accompanying image from Wikipedia
        articles, crafting a unique tapestry of thought in every iteration.
      </p>
      <p>
        This interplay of words and images acts as a catalyst for creativity,
        pushing the boundaries of conventional narrative and inviting users to
        construct their own stories, interpretations, and meanings. Each
        monostich serves as a testament to the human ability to connect dots, to
        weave narratives, and to find humor, intelligence, and even absurdity in
        the fragments of information that float through our digital lives.
      </p>
      <p>
        The philosophical underpinnings of Wiki Monostich are as rich and varied
        as the outcomes it generates. This project is not just a playful
        encounter with randomness; it is a mirror reflecting our innate desire
        to find order in chaos, meaning in the mundane. It challenges us to
        question our perceptions and biases, encouraging us to make sense of
        what initially appears to be nonsensical. It&apos; s a canvas for our
        imagination, proving that sense can be sculpted from randomness.
      </p>
      <p>
        In a world brimming with structured data and rigid categorizations,
        we&apos; re reminded that there is profound beauty and insight to be
        found in the serendipitous collisions of ideas and images. Through this
        project, we are invited to embrace the randomness, to revel in the
        unexpected, and to celebrate the remarkable human capacity to find
        coherence in the chaos of the digital age.
      </p>
    </div>

    <footer>
      <ul>
        <li>
          <span>Created by: <br /></span>
          <span
            ><a href="https://designbusinesscompany.com" target="_blank"
              >Design Business Company</a
            ></span
          >
        </li>
        <li>
          <span>Images provided by: <br /></span>
          <span
            ><a href="https://wikipedia.com" target="_blank">Wikipedia</a></span
          >
        </li>
        <li>
          <span>Open-sourced on: <br /></span>
          <span
            ><a
              href="https://github.com/design-business-company/monostich-wiki"
              target="_blank"
              >Github</a
            ></span
          >
        </li>
        <li>
          <span>Open-sourced on: <br /></span>
          <span>Franklin, System 85, DBC Metaphor</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import PageSetup from "~/composables/PageSetup";
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";
import { useHead } from "#app";

// Run common mount/unmount scripts. Seup SEO, etc.
PageSetup({
  seoMeta: { title: "Monostich Wiki - About" },
});

useHead({
  htmlAttrs: {
    style:
      "--color-background: #3B3C28;--color-interactive: #16150D; --color-background-light: #000000; --color-foreground: #000000; --color-fab-icon: #3B3C28",
  },
});

// Define page transitions or other page meta
definePageMeta({
  pageTransition: pageTransitionDefault(),
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.page-content {
  position: relative;
  display: grid;
  min-height: 100%;
  grid-template-rows: 1fr auto;
  grid-template-columns: repeat(12, 1fr);
  padding-left: var(--unit-big);
  padding-right: var(--unit-big);
  font-family: "metaphor";
  font-variation-settings: "wght" 600;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    padding-top: calc(36px + var(--unit-small));
  }
}

.center-col {
  font-size: 18px;
  line-height: 20px;
  grid-column: 1 / span 12;

  // grid-column: 4 / span 6;

  // @include fluidScale(18px, 20px, 640px);

  // @media (min-width: 1200px) {
  //   @include fluidScale(30px, 32px, 1920px);
  // }

  @media (min-width: 540px) {
    // @include fluidScale(18px, 20px, 540px);
  }

  @media (min-width: 768px) {
    grid-column: 3 / span 8;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / span 6;
    @include fluidScale(16px, 18px, 1024px);
    letter-spacing: -0.02em;
  }

  // max-width: 50ch;
  text-indent: 5ch;
  padding-bottom: var(--unit-huger);

  svg {
    display: block;
    width: 100%;
    height: auto;
    padding-top: var(--unit-big);
    padding-bottom: var(--unit-bigger);
  }
}

footer {
  font-family: "metaphor";
  font-variation-settings: "wght" 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  grid-column: 1 / span 12;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.1em;
    }
  }

  li {
    margin-bottom: 1em;

    span:first-child {
      opacity: 0.6;
    }
  }
}
</style>
