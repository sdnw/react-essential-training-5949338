import { useEffect, useReducer } from "react";
import React from "react";
import "./App.css";
import test from "/home/steven/development/code/react-essential-training-5949338/next-react-project/react-project/src/assets/images/test.png";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = ["Macaroni and Cheese", "Burger", "Salad"];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be open.</button>
        <h2>Welcome to this restaurant! {openStatus ? "Open" : "Closed"}</h2>
      </div>
      <main>
        <img src={test} height={200} alt="test" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyle: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}.`);
  }, [status]);

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={toggle}>{status ? "Close" : "Open"} Restaurant</button>
      <Header name="Bob" year={2025} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;
