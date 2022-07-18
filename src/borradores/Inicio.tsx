import React, { Fragment } from 'react';
import { Link, useParams, Routes, Route } from "react-router-dom";
import carta from '../Jsons/carta.json';



const Inicio = () => {


  return (
    <Fragment>
      <p>~~ La nuestra carta ~~</p>
      <div className="divInicioPrincipal">
        <div className="divInicio dI1">
          <strong>pizzas</strong>
          {carta &&
            Object.keys(carta.pizzas).map((pizza: any, index: any) => (
              <div key={index}>
                <Link to={`/pagina/${pizza.nombre}`}> {pizza}</Link>
              </div>
            ))}
        </div>
        <div className="divInicio dI2">
          <div>
            {/* seguir el método pastas*/}
            <strong>pastas</strong> <br />
            <Link
              to={`/pagina/${carta.pastas.pesto.ingredientes}/${carta.pastas.pesto.nombre}/${carta.pastas.pesto.precio}`}
            >
              {carta.pastas.pesto.nombre}{" "}
            </Link>{" "}
            <Link
              to={`/pagina/${carta.pastas.carbonara.ingredientes}/${carta.pastas.carbonara.nombre}/${carta.pastas.carbonara.precio}`}
            >
              <div className="divElemento">
                {" "}
                {carta.pastas.carbonara.nombre}{" "}
              </div>{" "}
            </Link>{" "}
            <Link
              to={`/pagina/${carta.pastas.boloñesa.ingredientes}/${carta.pastas.boloñesa.nombre}/${carta.pastas.boloñesa.precio}`}
            >
              {carta.pastas.boloñesa.nombre}{" "}
            </Link>
          </div>
        </div>
        <div className="divInicio dI3"></div>
        <div className="divInicio dI4">
          <strong>bebidas</strong>
          {carta &&
            carta.bebidas.nombres.map((bebida: any, index: any) => (
              <div key={index}>
                <Link to={`/pagina/${carta.bebidas.agua.ingredientes}/${carta.bebidas.cafe.ingredientes}/${carta.bebidas.cafe.ingredientes}`}>
                  {" "}
                  {bebida} -
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Inicio