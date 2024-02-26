import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useConverter } from "../hooks/useConverter";

export const Converter = ({listaFavoritos, setListaFavoritos, setShow}) => {

  const {
    transform,
    distance,
    setDistance,
    conversion,
    setConversion,
    result,
    setResult,
    valueInput,
    setValueInput,
    valueResult,
    setValueResult,
    handleClick
  } = useConverter();

  useEffect(()=>{ 
    if (distance !== "") {
      transform(distance);
    }
  }, [distance, conversion])

  const handleChange = (e) => {
    //controlo el input
    const inputDistance = e.target.value;
    setDistance(inputDistance);
  };

  const handleClickLike = (e) => {
    e.preventDefault();
    if (distance != "") {
      //creo un objeto para almacenar la info
      const itemToSave = {
        distance,
        valueInput,
        result,
        valueResult
      }

      //obtengo la lista de elmentos favoritos
      const conversionesFavoritas = JSON.parse(localStorage.getItem("conversion")) || [];
      //actualizo la lista de elmentos favoritos
      const atualizacionFavoritas = [... conversionesFavoritas, itemToSave];
      //guardo el objeto en el localStorage
      localStorage.setItem("conversion", JSON.stringify(atualizacionFavoritas))
      //actualizo la lista de favoritos
      setListaFavoritos([
        ...listaFavoritos,
        <div
          key={listaFavoritos.length}
          style={{ display: "flex", alignItems: "center" }}
        >
          {distance} {valueInput} 
           <FaLongArrowAltRight style={{ verticalAlign: "middle" }} />  {result} {valueResult}
        </div>,
      ]);

      //limpio los estados
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
          <hr />
        <div className="converter">
          <h2>converter</h2>
          <div className="options">
            <select
              value={conversion}
              onChange={(e) => setConversion(e.target.value)}
              autoFocus
            >
              <option value="">Conversión</option>
              <option value="Km a Millas">Km a Millas</option>
              <option value="Millas a Km">Millas a Km</option>
              <option value="Metros a Pies">Metros a Pies</option>
              <option value="Pies a Metros">Pies a Metros</option>
              <option value="Cm a Pulgadas">Cm a Pulgadas</option>
              <option value="Pulgadas a Cm">Pulgadas a Cm</option>
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
            <div className="pointerHeart" onClick={handleClickLike}>
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
