import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import bebidax2 from "../Jsons/carta.json";



const DatosVinosElementos = () => {
  return (
    <Fragment>
      <div>
        Nuestros <span>vinos</span>
      </div>
      <div className="elementosDinamicos_DatosElementos_vino">
        <div className="div_DatosElementos">
          {" "}
          <div className="div_DatosElementos_vino_1">
            <span> vinos</span>{" "}
            {bebidax2 &&
              bebidax2.bebidas.vino.nombre.map((x: any) => (
                <div>{x} </div>
              ))}{" "}
          </div>
        </div>{" "}
        <div className="div_DatosElementos">
          {" "}
          <div className="div_DatosElementos_vino_2">
            <span> precios</span>{" "}
            {bebidax2 &&
              bebidax2.bebidas.vino.precio.map((x: any) => (
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

export default DatosVinosElementos;
