import React from "react";

const Dates = () => {
  return (
    <section className="created-dates">
      <h2>Citas Creadas</h2>
      <div className="card">
        <p className="card-text">
          <span>Nombre Mascota: </span> Brunito
        </p>
        <p className="card-text">
          <span>Nombre Dueño: </span> Andrés Reyes
        </p>
        <p className="card-text">
          <span>Fecha Cita: </span> 08-04-2019
        </p>
        <p className="card-text">
          <span>Hora Cita: </span> 10:20
        </p>
        <p className="card-text">
          <span>sintomas </span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          possimus sit consequuntur quod sapiente doloribus non dolorem
          accusamus voluptatum libero sint dignissimos praesentium nihil magnam
          adipisci, sunt commodi odio minus.
        </p>
        <button className="btn-danger">Eliminar Cita</button>
      </div>
    </section>
  );
};

export default Dates;
