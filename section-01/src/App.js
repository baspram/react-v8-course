const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hidden text"),
    React.createElement("h2", {}, "Text from React Lib!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Chihuahua",
    }),
    React.createElement(Pet, {
      name: "Vulcan",
      animal: "Dog",
      breed: "Bassiet",
    })
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  React.createElement(App, {}, React.createElement("h3", {}, "Text from Root!"))
);
