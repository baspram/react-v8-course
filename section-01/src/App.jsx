import { createElement } from 'react'
import { createRoot } from 'react-dom'

const Pet = (props) => {
  return createElement("div", {}, [
    createElement("h1", {}, props.name),
    createElement("h2", {}, props.animal),
    createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return createElement(
    "div",
    {},
    createElement("h1", {}, "Hidden text"),
    createElement("h2", {}, "Text from Lib!"),
    createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Chihuahua",
    }),
    createElement(Pet, {
      name: "Vulcan",
      animal: "Dog",
      breed: "Bassiet",
    })
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  createElement(App, {}, createElement("h3", {}, "Text from Root!"))
);
