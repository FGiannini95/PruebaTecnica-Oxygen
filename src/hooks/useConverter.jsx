import React, { useState } from 'react'

export const useConverter = () => {

  const [distance, setDistance] = useState(""); 
  const [conversion, setConversion] = useState("");
  const [result, setResult] = useState(""); 
  const [valueInput, setValueInput] = useState(""); 
  const [valueResult, setValueResult] = useState(""); 

  const transform = () => {
    const n = distance.trim(); // Eliminamos espacios en blanco al inicio y al final
    if (!/^\d*\.?\d+$/.test(n)) {
      setDistance(""); 
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
    } else if (conversion === "Metros a Pies") {
      convertedDistance = n * 3.281;
      input = "Metros";
      res = "Pies";
    } else if (conversion === "Pies a Metros") {
      convertedDistance = n / 3.281;
      input = "Pies";
      res = "Metros";
    } else if (conversion === "Cm a Pulgadas") {
      convertedDistance = n / 2.54;
      input = "Cm";
      res = "Pulgadas"
    } else if (conversion === "Pulgadas a Cm") {
      convertedDistance = n * 2.54;
      input = "Pulgadas";
      res = "Cm"
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
    } else if (conversion === "Metros a Pies"){
      setConversion("Pies a Metros")
    } else if (conversion === "Pies a Metros"){
      setConversion("Metros a Pies")
    } else if (conversion === "Cm a Pulgadas"){
      setConversion("Pulgadas a Cm")
    } else if (conversion === "Pulgadas a Cm"){
      setConversion("Cm a Pulgadas")
    } 

    // Intercambiar los valores de entrada y salida
    setValueInput(valueResult);
    setValueResult(valueInput);
    setDistance(result);
    setResult(distance);
  };
  

  return {
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
  }
}
