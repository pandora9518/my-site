import Vue from "vue";
/**
	获取某个组件渲染的Dom根元素
*/
export default function getComponentRootDom(Component, props) {
  const vm = new Vue({
    render: (h) => h(Component, { props }),
  });
  vm.$mount();
  return vm.$el;
}
