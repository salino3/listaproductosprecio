import React, { Fragment } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";
import carta from "../Jsons/carta.json";
import cartainfo from '../Jsons/carta2-0.json';


const FirstComponent = () => {




  return (
    <Fragment>
      <p>~~ La nuestra carta ~~</p>
      <div className="divInicioPrincipal ">
        <div className="divInicio dI1 ">
          <div className="img1"> 

          <strong>pastas</strong>
          {cartainfo &&
            cartainfo.pastas.map((uno: any) => (
              <div key={uno.id}>
                <div >
                  {" "}
                 <Link  to={`/pagina/${uno.ingredientes}/${uno.plato}/${uno.precio}`}> 
                    {" "}
                   <h4 className="h4L">   {uno.plato} </h4>
                  </Link>{" "}
                </div>
              </div>
            ))}
            </div>
        </div>

        <div className="divInicio dI2">
          <div className="img2">
          <strong>pizzas</strong>
          {cartainfo &&
            cartainfo.pizzas.map((uno: any) => (
              <div key={uno.id}>
                <div>
                  {" "}
                 <Link to={`/pagina/${uno.ingredientes}/${uno.plato}/${uno.precio}`}>
                     <h4 className="h4L">   {uno.plato}  </h4>
                  </Link>{" "}
                </div>
              </div>
            ))}
            </div>
        </div>

        <div className="divInicio dI3">
             <div className="img3">
          <strong>postres</strong>
          {cartainfo &&
            cartainfo.postres.map((uno: any) => (
              <div key={uno.id}>
                <div>
                  {" "}
                  <Link
                    to={`/pagina/${uno.ingredientes}/${uno.plato}/${uno.precio}`}
                  >
                    {" "}
                       <h4 className="h4L">  {uno.plato} </h4>
                  </Link>{" "}
                </div>
              </div>
            ))}
            </div>
        </div>
        <div className="divInicio dI4">
             <div className="img4">
          <strong>bebidas</strong> <br />
          <Link to={`/pagina/cafe`}>   <h4 className="h4L"> café</h4></Link> 
          <Link to={`/pagina/vino`}>   <h4 className="h4L"> vinos  </h4></Link> 
          <Link to={`/pagina/agua`}>   <h4 className="h4L"> agua  </h4></Link>
        </div>
        </div>
      </div>
    </Fragment>
  );

};

export default FirstComponent;
