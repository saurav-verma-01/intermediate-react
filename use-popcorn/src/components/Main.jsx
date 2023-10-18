import Box from "./Box";
import MoviesList from "./MoviesList";
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";
import { useState } from "react";
import { tempWatchedData } from "./constants";

const Main = ({ movies, children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
