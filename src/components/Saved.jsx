import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

export const Saved = ({ listaFavoritos, setListaFavoritos, show }) => {
  const handleDelete = (index) => {
    const updatedList = listaFavoritos.filter((item, idx) => idx !== index);
    setListaFavoritos(updatedList);
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
