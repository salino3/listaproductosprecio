import React, { Fragment } from 'react';
// importando sea el object de 'pizza' que de 'pastas'
import pizza from "../Jsons/pizzas.json";

const TryReadJson2 = () => {
  return (
    <Fragment>
      <div className="pizza">
        Json - pizza: <br />
        {pizza &&
          pizza.pizza.diavola.ingredientes.map((elemento: any, index: any) => (
            <div className="box" key={index}>
              <strong> {elemento} </strong>
            </div>
          ))}{" "}
 <hr />
        {pizza &&
          Object.values(pizza.pizza.margherita.name).map(
            (elemento: any, index: any) => (
              <strong key={index}>{elemento} </strong>
            )
          )}
   <hr />
        {pizza &&
          pizza.pastas.carbonara.ingredientes.map(
            (elemento: any, index: any) => (
              <strong key={index}>{elemento} </strong>
            )
          )}
      </div>
      
    </Fragment>
  );
}

export default TryReadJson2