import React from "react";
import { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import Header from "./Component/Header";
import Item from "./Component/item";
import Search from "./Component/search";
import NotFound from "./Component/NotFound";

class App() {
  return (
    <PhotoContextProvider>
      <HashRouter basename>
      </HashRouter>
    </PhotoContextProvider>

  );
}

export default App;
