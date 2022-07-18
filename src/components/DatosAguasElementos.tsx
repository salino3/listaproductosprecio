import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import bebidax2 from "../Jsons/carta.json";

const DatosAguasElementos = () => {
  return (
    <Fragment>
      <div>
        Nuestros <span>agua</span>
      </div>
      <div className="elementosDinamicos_DatosElementos_agua">
        <div className="div_DatosElementos">
          {" "}
          <div className="div_DatosElementos_agua_1">
            <span> agua</span>{" "}
            {bebidax2 &&
              bebidax2.bebidas.agua.nombre.map((x: any) => (
                <div>{x} </div>
              ))}{" "}
          </div>
        </div>{" "}
        <div className="div_DatosElementos">
          {" "}
          <div className="div_DatosElementos_agua_2">
            <span> precios</span>{" "}
            {bebidax2 &&
              bebidax2.bebidas.agua.precio.map((x: any) => (
                <div>{x} </div>
              ))}{" "}
          </div>
        </div>
      </div>
      <br />
      <hr className="hr2" />
       <Link to={"/"} style={{color:'white'}}>Home</Link>
     <br /> <br />
    </Fragment>
  );
};

export default DatosAguasElementos;
