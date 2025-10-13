import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultImg from "@/assets/default.gif";
//这里存储没有处理好的图片
let imgs = [];
function setImage(img) {
  img.dom.src = defaultImg;
  //这里对图片进行处理
  //判断元素是否在视口中
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  if (rect.bottom >= 0 && rect.top <= clientHeight) {
    img.dom.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}
function setImages() {
  for (let img of imgs) {
    setImage(img);
  }
}
function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings) {
    const img = {
      src: bindings.value,
      dom: el,
    };
    imgs.push(img);
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
