import loading from "@/assets/loading.svg";
import styles from "@/directives/loading.module.less";
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
}
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loading;
  img.className = styles.loading;
  return img;
}
export default function bind(el, binding) {
  const curImg = getLoadingImage(el);
  if (binding.value) {
    if (!curImg) {
      const img = createLoadingImg();
      el.append(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
