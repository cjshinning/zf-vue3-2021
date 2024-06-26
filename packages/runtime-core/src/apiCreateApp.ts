import { createVNode } from './vnode';

export function createAppAPI(render) {
  return function createApp(rootComponent, rootProps) { //告诉它哪个组件哪个属性来创建的应用
    const app = {
      _props: rootProps,
      _component: rootComponent,
      _container: null,
      mount(container) {  //告诉它挂载的目的地
        // console.log(container, rootComponent, rootProps, rendererOptions);
        // let vnode = {};
        // render(vnode, container);

        // 1.根据组件创建虚拟节点
        // 2.将虚拟节点和容器获取到后调用render方法进行渲染

        // 创建虚拟节点
        const vnode = createVNode(rootComponent, rootProps);
        // 调用render
        render(vnode, container);
        app._container = container;
      }
    }
    return app;
  }
}
