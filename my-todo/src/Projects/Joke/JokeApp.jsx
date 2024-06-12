import React from "react";
import Joke from "./Joke";

export default function JokeApp() {
  return (
    <>
      <div className="main-app">
        <h1>Joke-App</h1>
        <h2>Joke Generator React App </h2>
        <Joke/>
      </div>
    </>
  );
}
