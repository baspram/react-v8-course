// import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import Pet from './Pet'; 
import SearchParams from './SearchParams';
// const App = () => {
//   return createElement(
//     "div",
//     {},
//     createElement("h1", {}, "Hidden text"),
//     createElement("h2", {}, "Text from Lib!"),
//     createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Chihuahua",
//     }),
//     createElement(Pet, {
//       name: "Vulcan",
//       animal: "Dog",
//       breed: "Bassiet",
//     })
//   );
// };

const App = () => (
  <div>
    {/* <h1> Hidden Text </h1> */}
    {/* <Pet name="Luna" animal="Dog" breed="Chihuahua"/>
    <Pet name="Vulcan" animal="Dog" breed="Kintamani"/> */}
    <h2> Text from Lib! </h2>
    <SearchParams />
  </div>
)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
