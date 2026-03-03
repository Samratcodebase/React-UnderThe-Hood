// const RenderComponent = (reactElement, root) => {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.Children;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);
//   root.appendChild(domElement);
// };

const RenderComponentV2 = (reactElement, root) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  for (prop in reactElement.props) {
    if (prop == "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  root.appendChild(domElement);
};
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    id: "Samrat",
    draggable: "true",
  },
  Children: "click  me to visit google",
};

const root = document.getElementById("root");
RenderComponentV2(reactElement, root);


