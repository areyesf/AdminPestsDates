import React, { useState } from "react";

const Form = () => {
  //date state
  const [date, setDate] = useState({
    petName: "",
    ownerName: "",
    day: "",
    hour: "",
    symptom: "",
  });

  //function that runs when the users enter data into inputs
  const handleChange = (e) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };
  //extract values
  const { petName, ownerName, day, hour, symptom } = date;

  // function that sends the data
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>Crear Citas</h2>
      <form>
        <input
          type="text"
          name="petName"
          placeholder="Ingresar Nombre Mascota"
          onChange={handleChange}
          value={petName}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Ingresar Nombre Dueño"
          onChange={handleChange}
          value={ownerName}
        />
        <input type="date" name="day" onChange={handleChange} value={day} />
        <input
          type="time"
          name="hour"
          placeholder="Ingresar Nombre Mascota"
          onChange={handleChange}
          value={hour}
        />
        <textarea
          name="symptom"
          id=""
          placeholder="Describa los síntomas aquí"
          onChange={handleChange}
          value={symptom}
        ></textarea>
        <button type="submit" className="btn-sucess">
          Agrega Cita
        </button>
      </form>
    </section>
  );
};

export default Form;
