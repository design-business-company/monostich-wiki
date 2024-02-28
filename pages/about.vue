<template>
  <div class="page-content">
    <div class="center-col">
      <IconLogo />
      <p>
        Wiki Monostich is a testament to the beauty of randomness and the human
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
        what initially appears to be nonsensical. The juxtaposition of random
        adjectives and nouns with an unrelated image serves as a canvas for our
        imagination, proving that sense can be sculpted from randomness.
      </p>
      <p>
        In a world brimming with structured data and rigid categorizations,
        we're reminded that there is profound beauty and insight to be found in
        the serendipitous collisions of ideas and images. Through this project,
        we are invited to embrace the randomness, to revel in the unexpected,
        and to celebrate the remarkable human capacity to find coherence in the
        chaos of the digital age.
      </p>
    </div>
    <footer>
      <ul>
        <li>
          Created by: <br />
          <a href="https://designbusinesscompany.com" target="_blank"
            >Design Business Company</a
          >
        </li>
        <li>
          Images provided by: <br />
          <a href="https://wikipedia.com" target="_blank">Wikipedia</a>
        </li>
        <li>
          Open-sourced on: <br />
          <a href="https://github.com" target="_blank">Github</a>
        </li>
        <li>
          Typography used: <br />
          Franklin, System 85, DBC Metaphor
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import PageSetup from "~/composables/PageSetup";
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";
import { useHead } from "#app";

PageSetup({
  seoMeta: {
    title: "Monostich Wiki - About",
    description:
      "'In the midst of chaos, there is also opportunity.' - Sun-Tzu",
    image:
      "https://egstad.link/images/monostich-wiki/og-image.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIF2GB8ktx8QK3fUzMV2bHrv1BKjxb6RbRnC1c6zpmvu0AiEA2lzWoqGOx%2F6EvcgKEQCwAYb4U0m5K5%2F5JeBzAC8g%2F6kq8QII5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mjc3NTEwOTM0NjMiDJugnMfNOmH5oQfS9CrFAppthWGjhwGUjofvRtjuwkQOxXwA2pFABkbxl2l7QnjOKdxFb3L6PLv%2BoFSieDRMgxo35%2Bc%2FMwqmZbo%2B9PnCFTWFZpLD%2B3zwLuvSVDfAQsED2QF89x%2BLF%2FvKmxwrxdknpT0Zb42TcBAPtkNTAT87a6OvGoTvSNY1Xnj%2B65Ndb2XByKNEEyA81ArPJVoso9JzNVnd%2FekcGDVukENFXyLLMZ6abY%2BWAd3c7hqEJowYZ0szxHAk2f2JQCAnQpEmdzXPquvzz%2B7jaQWj%2BH%2B28O%2FETuViwizRzQCyEk4xRZsQDECuEpsR3oXe%2FGVmfgpAMGohqVDUeutY7yzK0j%2FhdXU5CxY9ThDMw6Iv1B6WnrzI%2FKX7QXjZNl1wYEBfolP9S4QMxqKhJFNrGQ45N3USZEoCGweRY8U%2BqHYiAxWc4URLJuKWYXNA3bgwk876rgY6swJAJ%2Bx9d9cpYQpaOFurzPkNsWi%2Fb8QbyDfNlmhlNiXM1D5SWtp2zhUx6Psdg3Ohzpm5BXpHaS0lNOlW2o3z9PNpLkzFBCzTFILXA%2BYVlctb8QE7xiFQF%2BGM7A18fM23dMeBk6ZOlBuefzCYMN3exdbLbGTJcnnUokhQJkvEL98o0vkrrA0q0HzIoDjt4SLiiI9LwihK4oGlwYscEpzcSD5%2BPdDA3%2Bh%2BWFHIgl%2F8OuxWADS%2By8xSUD59qOv8ZWSXGduiYrCf4AWPHS4mVo8UVSr6m3CQCs0cbT0jRClDNzJLJpJAmIm5QxEx4OeGx6e5PD6vUH346va4S1cl7C1Pz4fNaE%2Fb9fC61%2BtnY2Dyl87NtYA8HX7SBPV5tT2IamBKXl0H6OZW0M6YTQGK8TykdE83WE1m&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240228T032516Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZEKHBQTLR4ZFPGPT%2F20240228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=abe28ba3768700c68b9f505f768d7be402b018603595d5029ec8cc0978738b8b",
  },
});

useHead({
  htmlAttrs: {
    style:
      "--color-background: #4a462a; --color-interactive: #4a462a; --color-foreground: #000000;",
  },
});

// --color-background: #000000;
//   --color-background-light: #16150d;
//   --color-foreground: #f4f3ef;
//   --color-interactive: #4a462a;

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
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(12, 1fr);
  padding-left: var(--unit-big);
  padding-right: var(--unit-big);
  font-family: "metaphor";
  font-variation-settings: "wght" 600;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    padding-top: calc(var(--unit-huge) + var(--unit-smaller));
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
  }

  li {
    margin-bottom: 1em;
  }
}
</style>
