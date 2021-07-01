import { registerImage } from "./lazy";

const baseUrl = "https://randomfox.ca/";
const API = "images/";

const appNode = document.querySelector("#images");
const addImageButton = document.querySelector("#addImage");
const clearImagesButton = document.querySelector("#clearImages");

const generateRandomInteger = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const addImage = () => {
  const randomNumber = generateRandomInteger(123);
  const image = document.createElement("img");
  image.dataset.src = `${baseUrl}${API}${randomNumber}.jpg`;
  image.className = "mx-auto sm:w-96 w-80";

  const container = document.createElement("div");
  container.className = "mx-auto my-5 sm:w-96 w-80";
  container.append(image);

  addPlaceholder(container);

  appNode.append(container);
  registerImage(container);

  // Report
  totalImages = totalImages + 1;

  handlerClearImagesButton();
};

const addPlaceholder = (container) => {
  const placeholder = document.createElement("div");
  placeholder.className = "mx-auto sm:w-96 w-80 h-72 bg-gray-500 rounded";
  container.append(placeholder);
};

const clearImages = () => {
  while (appNode.firstChild) {
    appNode.removeChild(appNode.firstChild);
  }
  totalImages = 0;
  loadedImages = 0;
  handlerClearImagesButton();
};

const handlerClearImagesButton = () => {
  if (totalImages > 0) {
    clearImagesButton.disabled = false;
    clearImagesButton.classList.add("focus:outline-none");
    clearImagesButton.classList.add("hover:bg-purple-200");
    clearImagesButton.classList.add("cursor-pointer");
    clearImagesButton.classList.remove("text-gray-200");
  } else {
    clearImagesButton.disabled = true;
    clearImagesButton.classList.remove("focus:outline-none");
    clearImagesButton.classList.remove("hover:bg-purple-200");
    clearImagesButton.classList.remove("cursor-pointer");
    clearImagesButton.classList.add("text-gray-200");
  }
};

addImageButton.addEventListener("click", addImage);
addImageButton.addEventListener("click", report);
clearImagesButton.addEventListener("click", clearImages);
