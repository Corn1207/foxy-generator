const isIntersecting = (entry) => {
  return entry.isIntersecting; // True dentro de la pantalla y falso si no esta en la pantalla
};

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const placeholder = container.lastChild;
  const url = image.dataset.src;

  image.onload = () => {
    placeholder.remove();
    // When image loads complete
    image.style.display = "initial";

    //
    loadedImages = loadedImages + 1;
    report();
  };

  //Load Image
  image.src = url;

  // Image before gets load complete
  image.style.display = "none";

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  // Itersection Observer -> observe image
  observer.observe(image);
};
