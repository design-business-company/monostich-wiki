![](./public/thumb.png)

# [Monstich.wiki](https://monostich.wiki) [![Netlify Status](https://api.netlify.com/api/v1/badges/24ba5021-d39b-490c-bc70-da28185c7684/deploy-status)](https://app.netlify.com/sites/monostich-wiki/deploys)

Monostich Wiki is a testament to the beauty of randomness and the human capacity to find meaning, humor, and insight in the most unexpected places. At its core, Wiki Monostich plays with the elements of chance by shuffling an adjective, a noun, and an accompanying image from Wikipedia articles, crafting a unique tapestry of thought in every iteration.

This interplay of words and images acts as a catalyst for creativity, pushing the boundaries of conventional narrative and inviting users to construct their own stories, interpretations, and meanings. Each monostich serves as a testament to the human ability to connect dots, to weave narratives, and to find humor, intelligence, and even absurdity in the fragments of information that float through our digital lives.

The philosophical underpinnings of Wiki Monostich are as rich and varied as the outcomes it generates. This project is not just a playful encounter with randomness; it is a mirror reflecting our innate desire to find order in chaos, meaning in the mundane. It challenges us to question our perceptions and biases, encouraging us to make sense of what initially appears to be nonsensical. The juxtaposition of random adjectives and nouns with an unrelated image serves as a canvas for our imagination, proving that sense can be sculpted from randomness.

In a world brimming with structured data and rigid categorizations, we’re reminded that there is profound beauty and insight to be found in the serendipitous collisions of ideas and images. Through this project, we are invited to embrace the randomness, to revel in the unexpected, and to celebrate the remarkable human capacity to find coherence in the chaos of the digital age.

## Setup

```bash
# clone the repo
git clone https://github.com/design-business-company/monostich-wiki.git

# install dependencies
npm install
```

## Scripts

```bash
# Run dev server (http://localhost:3000 by default):
npm run dev

# Build the application for production:
npm run build

# Locally preview production build:
npm run preview
```

## Tech stack

This is a [Nuxt](https://nuxt.com/docs/getting-started/introduction) project which includes a handful of very help packages and plugins.

- [GSAP](https://gsap.com/docs/v3/) for animations.
- [Pinia](https://pinia.vuejs.org/introduction.html) for storing data that I share globally.
- [SASS](https://sass-lang.com/documentation/) has been configured so `scss` and `sass` are valid within single file components.
- A number of small plugins which help track user preferences and devie info.
  - [`deviceInfo`](./plugins/device/deviceInfo.ts) for fetching device context info (`isMobile`, `isTouch`, etc.).
  - [`deviceDimensions`](./plugins/device/deviceDimensions.ts) for fetching device and document dimensions, screen dpi, etc.
  - [`deviceMotionPreference`](./plugins/device/deviceMotionPreference.ts) for detecting if a user prefers reduced motion or not.
  - [`deviceThemePreference`](./plugins/device/deviceThemePreference.ts) for detecting a user's preferred color theme.
  - [`deviceScroll`](./plugins/device/deviceScroll.ts) for tracking user scroll info.
  - [`deviceResize`](./plugins/device/deviceResize.ts) for tracking window resize events.

### Helpful Composables/components

- [`FetchWikiImage`](./composables/FetchWikiImage.ts) for fetching image url from wikipedia.
- [`Observer`](./components/Observer.vue) for detecting if an element is in the viewport.
