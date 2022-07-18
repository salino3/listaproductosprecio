import React, { Fragment, useState } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";
import DatosElemento from "./components/DatosElemento";
import FirstComponent from "./components/FirstComponent";
// import Inicio from "./borradores/Inicio";
import Nav from "./components/Nav";
import DatosCafesElementos from "./components/DatosCafesElementos";
import DatosVinosElementos from "./components/DatosVinosElementos";
import DatosAguasElementos from "./components/DatosAguasElementos";



const Router = () => {
  return (
    <Fragment>
      <div className="navPrincipal">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<FirstComponent />} />
        <Route path={`pagina/:ingredientes/:nombre/:precio`} element={<DatosElemento />} />
        <Route path="/pagina/cafe" element={<DatosCafesElementos />} />
        <Route path="/pagina/vino" element={<DatosVinosElementos />} />
        <Route path="/pagina/agua" element={<DatosAguasElementos />} />



        <Route path="*" element={<h3>Page not found</h3>} />

      </Routes>
    </Fragment>
  );
};

export default Router;
