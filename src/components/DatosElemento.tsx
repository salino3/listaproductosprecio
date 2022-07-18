import React, { Fragment, useState } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";

const DatosElemento = () => {

    const { ingredientes, nombre, precio } = useParams();
  return (
    <Fragment>
      <div>
        Los ingredientes del plato <span> {nombre} </span>son:
      </div>
      <div className="elementosDinamicos_DatosElementos">
        <div className="div_DatosElementos"> {ingredientes} </div> <br />
        <hr />
        precio: {precio} <br /> <br />
        <Link to={"/"} style={{color:'white'}}>Home</Link>
      </div>
    </Fragment>
  );
};

export default DatosElemento;
