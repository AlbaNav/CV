import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
  return (
    <div className="more">
      <div className="divider">
        <span></span>
        <span>Idiomas</span>
        <span></span>
      </div>
      <div className="gridOne box">
      {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
       <p className="name"> {item.name}</p>
        <h4> Idioma: {item.language}</h4>
        <p> Nivel escrito: {item.wrlevel}</p>
        <p> Nivel oral: {item.splevel}</p>
      </div>
      );
        })}
        </div>
       <div>
        <span>Skills</span>
        </div>
      
      <div className="gridTwo box">
     
        { habilities.map((txt) => (
          <p key={txt}>{txt}</p>
        ))}
        
      </div>
    </div>
  );
};

export default More;
