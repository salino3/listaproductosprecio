import React from 'react';
import FileJson from "../Jsons/records.json";
import Coches from "../Jsons/coches.json";
import MKFile from '../Jsons/makingFile.json';
import TryReadJson2 from './TryReadJson2';


const TryReadjson = () => {
  return (
    <div>
      <TryReadJson2 />

      <div className="FileJson">
        Json - FileJon: <br /> -
        {FileJson &&
          FileJson.map((record) => {
            return (
              <div className="box" key={record.id}>
                <strong>{record.title}: </strong>
                {record.content} <br /> <br />
              </div>
            );
          })}
      </div>
      <div className="MKFile">
        Json - MKFile: <br /> -{/* */}
        <div>{MKFile.myfile.segundo.content}</div>-
        {MKFile &&
          MKFile.myfile.primero.tech.map((x, index) => {
            return (
              <div key={index}>
                <strong>{x.name} </strong>
              </div>
            );
          })}
      </div>

      <div className="coches">
        Json - coches: <br /> - Ford
        {Coches &&
          Coches.cars.Ford.map((elemento: any) => (
            <div className="box" key={elemento.id}>
              <strong>{elemento.model}: </strong>
              {elemento.doors} puertas
            </div>
          ))}
        - <br />
        Nissan
        {Coches &&
          Coches.cars.Nissan.map((elemento: any) => (
            <div className="box" key={elemento.id}>
              <strong>{elemento.model}: </strong>
              {elemento.doors} puertas
            </div>
          ))}
      </div>
    </div>
  );
}

export default TryReadjson