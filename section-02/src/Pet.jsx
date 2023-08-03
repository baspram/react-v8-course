// import { createElement } from 'react'

// BEFORE
// const Pet = (props) => {
//   return createElement("div", {}, [
//     createElement("h1", {}, props.name),
//     createElement("h2", {}, props.animal),
//     createElement("h3", {}, props.breed),
//   ]);
// };

// AFTER
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  )
}

export default Pet;