import React, { useState } from "react";
import MoviesBox from "./MoviesBox";
import WatchedBox from "./WatchedBox";

const Main = () => {
  return (
    <main className="main">
      <MoviesBox />
      <WatchedBox />
    </main>
  );
};

export default Main;
