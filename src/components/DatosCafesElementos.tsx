import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import bebidax2 from '../Jsons/carta.json';

const DatosCafesElementos = () => {
        // const { ingredientes, nombre, precio } = useParams();

  return (
    <Fragment>
      <div>
        Nuestros <span>cafés</span>
      </div>
      <div className="elementosDinamicos_DatosElementos_cafe">
        <div className="div_DatosElementos">
          {" "}
          <div className="div_DatosElementos_cafe_1">
            <span> cafés</span>{" "}
            {bebidax2 &&
              bebidax2.bebidas.cafe.nombre.map((x: any) => (
                <div>{x} </div>
              ))}{" "}
          </div>
        </div>{" "}
        <div className="div_DatosElementos">
          {" "}
          <div className="div_DatosElementos_cafe_2">
            <span> precios</span>{" "}
            {bebidax2 &&
              bebidax2.bebidas.cafe.precio.map((x: any) => (
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
}

export default DatosCafesElementos