import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
//import { MdDelete } from "react-icons/md";

export const Converter = ({listaFavoritos, setListaFavoritos, setShow}) => {

  const [distance, setDistance] = useState(""); //almaceno la distancia que ingreso en el input
  const [conversion, setConversion] = useState(""); //almacena la conversion seleccionada
  const [result, setResult] = useState(""); //almacena el resultado
  const [valueInput, setValueInput] = useState(""); //almaceno el valor de la conversión en el input
  const [valueResult, setValueResult] = useState(""); //almaceno el valor de la conversión en el resultado

  const handleChange = (e) => {
    //controlo el input
    const inputDistance = e.target.value;
    setDistance(inputDistance);
  };

  useEffect(()=>{ //ejecuto transform cada vez que hay un cambio en los valores del array
    if (distance !== "") {
      transform(distance);
    }
  }, [distance, conversion])

  const transform = () => {
    const n = distance.trim(); // Eliminamos espacios en blanco al inicio y al final
    if (!/^\d+(\.\d+)?$/.test(n)) {
      alert("¡Por favor, inserta un número válido!"); //expresión regular para validar
      return;
    }

    const numericDistance = parseFloat(n); //convertimos la cadena de texto en un numero
    if (isNaN(numericDistance)) {
      alert("¡Por favor, inserta un número válido!");
      return;
    }

    if (conversion === "") {
      alert("¡Por favor, selecciona una conversión!");
      return;
    }

    let convertedDistance = 0;
    let input = "";
    let res = "";

    if (conversion === "Km a Millas") {
      convertedDistance = n / 1.609;
      input = "Km";
      res = "Millas";
    } else if (conversion === "Millas a Km") {
      convertedDistance = n * 1.609;
      input = "Millas";
      res = "Km";
    } else if (conversion === "Km a Pies") {
      convertedDistance = n * 3281;
      input = "Km";
      res = "Pies";
    } else if (conversion === "Pies a Km") {
      convertedDistance = n / 3281;
      input = "Pies";
      res = "Km";
    }
    setResult(convertedDistance.toFixed(2)); // Redondeamos el resultado
    setValueInput(input);
    setValueResult(res);
  };

  const handleClick = () => {
    if (conversion === "Km a Millas") { //actualizo el valor del select
      setConversion("Millas a Km")
    } else if (conversion === "Millas a Km"){
      setConversion("Km a Millas")
    } else if (conversion === "Km a Pies"){
      setConversion("Pies a Km")
    } else if (conversion === "Pies a Km"){
      setConversion("Km a Pies")
    }

    // Intercambiar los valores de entrada y salida
    setValueInput(valueResult);
    setValueResult(valueInput);
    setDistance(result);
    setResult(distance);
  };

  // const handleDelete = (index) => {
  //   const updatedList = listaFavoritos.filter((item, idx) => idx !== index);
  //   setListaFavoritos(updatedList);
  // };

  const handleClickLike = (e) => {
    e.preventDefault();
    if (distance != "") {
      setListaFavoritos([
        ...listaFavoritos,
        <div
          key={listaFavoritos.length}
          style={{ display: "flex", alignItems: "center" }}
        >
          {distance} {valueInput}
          <FaLongArrowAltRight style={{ verticalAlign: "middle" }} /> {result}
          {valueResult}
          {/* <MdDelete
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(listaFavoritos.length)}
          /> */}
        </div>,
      ]);

       setDistance("");
       setConversion("");
       setResult("");
       setValueInput("");
       setValueResult("");
       setShow(true)
    }
  };

  return (
    <>
      <article className="article1">
        <div className="title">
          <h1>
            <FaArrowRightArrowLeft />
            unit converter
          </h1>
        </div>
        <div className="converter">
          <h2>converter</h2>
          <div className="options">
            <select
              value={conversion}
              onChange={(e) => setConversion(e.target.value)}
              autoFocus
            >
              <option value="">Selecciona una conversión</option>
              <option value="Km a Millas">Km a Millas</option>
              <option value="Millas a Km">Millas a Km</option>
              <option value="Km a Pies">Km a Pies</option>
              <option value="Pies a Km">Pies a Km</option>
            </select>
            <div className="pointerFlechas" onClick={handleClick}>
              <FaArrowRightArrowLeft />
            </div>
            <div className="inputEscrito">
              <input type="text" value={distance} onChange={handleChange} />
              <p>{valueInput}</p>
            </div>
          </div>
          <div className="footer">
            <div className="pointerFlechas" onClick={handleClickLike}>
              <FaRegHeart />
            </div>
            <div className="result">
              <h3> {result} </h3>
              <p>{valueResult} </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
