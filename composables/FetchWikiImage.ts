import { ref } from "vue";

// Define an interface for the image object structure, if available.
// Adjust this according to the actual structure you expect from the API.
interface ImageData {
  source: string;
  width: number;
  height: number;
}

export function FetchWikiImage() {
  const image: Ref<ImageData | null> = ref(null);

  async function getImage(
    imageQueryString: string,
    imageQuerySize: number = 1024
  ): Promise<void> {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&pithumbsize=${imageQuerySize}&titles=${imageQueryString}&origin=*`
      );
      const data = await response.json();
      const pages = data.query.pages as Array<any>; // Use a more specific type if you know the structure.
      const thumbnail = pages[0].thumbnail;
      if (thumbnail) {
        image.value = {
          source: thumbnail.source,
          width: thumbnail.width,
          height: thumbnail.height,
        };
      } else {
        image.value = null;
      }
    } catch (error) {
      console.error("Failed to load image:", error);
      image.value = null;
    }
  }

  return { image, getImage };
}
