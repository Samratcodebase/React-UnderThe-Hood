const RenderComponent = (reactElement, root) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  root.appendChild(domElement);
};
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "click  me to visit google",
};

const root = document.getElementById("root");
RenderComponent(reactElement, root);
