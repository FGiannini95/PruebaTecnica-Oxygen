import React, { useState } from "react";
import "./App.css";
import { Saved } from "./components/Saved";
import { Converter } from "./components/Converter";

function App() {
  const [listaFavoritos, setListaFavoritos] = useState([]); //guardo las conversiones que me interesan
  const [show, setShow] = useState(false)

  return (
    <>
      <Converter
        listaFavoritos={listaFavoritos}
        setListaFavoritos={setListaFavoritos}
        setShow={setShow}
      />
      <Saved
        listaFavoritos={listaFavoritos}
        setListaFavoritos={setListaFavoritos}
        show={show}
      />
    </>
  );
}
export default App;
