import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Saved = ({ listaFavoritos, setListaFavoritos, show }) => {

  const [savedItems, setSavedItems] = useState([]);
  
  useEffect(() => {
    // Obtener elementos guardados del localStorage al inicializarse el componente
    const savedItemsFromLocalStorage = JSON.parse(localStorage.getItem("conversion")) || [];
    setSavedItems(savedItemsFromLocalStorage);
  }, []);

  const handleDelete = (index) => {
    //obtengo la lista de los elementos favoritos
    const conversionesFavoritas = JSON.parse(localStorage.getItem("conversion")) || []
    //elimino el elemento correspondiente
    const atualizacionFavoritas = conversionesFavoritas.filter((item, idx) => idx !== index);
    //actualizo la lista de favoritos
    setListaFavoritos(atualizacionFavoritas.map((item, idx) => (
      <div
        key={idx}
        style={{ display: "flex", alignItems: "center" }}
      >
        {item.distance} {item.valueInput} {" "} 
        <FaLongArrowAltRight style={{ verticalAlign: "middle" }} /> {item.result} {item.valueResult}
      </div>
    )));
    //guardo en el localStorage
    localStorage.setItem("conversion", JSON.stringify(atualizacionFavoritas));
  };

  return (
    <>
      {show && listaFavoritos.length > 0 && (
        <article className="article2">
          <div className="saved">
            <h3>saved</h3>
            {listaFavoritos.map((elem, index) => {
              return (
                <div className="listado" key={index}>
                  <span>{elem}</span>
                  <MdDelete
                    className="delete-icon"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              );
            })}
          </div>
        </article>
      )}
    </>
  );
};