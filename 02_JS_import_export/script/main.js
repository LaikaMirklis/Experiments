// import { listData } from "./data.js";
// console.log(listData[0].description);

// const BlockList = () => {
//   return (
//     <ul>
//       {listData.map((data, key) => (
//         <li key={key}>{`${data.thing}: ${data.description}`}</li>
//       ))}
//     </ul>
//   );
// };

function messege() {
  alert("Hello!");
}

let block1 = (
  <>
    <h1>I like Baldurs Gate 3!</h1>
    <p>
      It is a great role-playing game with a lot to offer players. Here are some
      of the things I like about it:
    </p>

    <p>
      Overall, I think Baldur's Gate 3 is a great game with a lot to offer
      players. I'm excited to see how it develops in the future.
    </p>
    <button onClick={messege}>Click on me</button>
  </>
);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(block1);
