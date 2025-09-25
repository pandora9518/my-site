import Icon from "@/components/Icon/index.vue";
import getComponentRootDom from "./getComponentRootDom";
import styles from "./showMessage.module.less";
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  const iconDom = getComponentRootDom(Icon, { type });
  iconDom.classList.add(`${styles.icon}`);
  const div = document.createElement("div");
  div.innerHTML = `<div>${iconDom.outerHTML}<span>${content}</span></div>`;
  const messageType = styles[`message-${type}`];
  div.className = `${styles.message} ${messageType}`;
  if (!container) {
    container = document.body;
  } else {
    //容器的position是否改动
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);
}
