import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function NavBar({children}) {
  return (
    <div>
      <h1>NavBar</h1>
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>Logo</h1>
    </div>
  );
}

function Item() {
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

function Contenedor({children}) {
  return (
    <div>
      <h1>Contenedor</h1>
      {children}
    </div>
  );
}

function Card() {
  return (
    <div>
      <h1>Card</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar>
        <Logo/>
        <Item />
        <Item />
        <Item />
        </NavBar>

      <Contenedor>
        <Card />
        <Card />
      </Contenedor>
    </>
  );
}

export default App;
