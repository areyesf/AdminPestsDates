import React from "react";
import Form from "./components/Form";
import Dates from './components/Dates';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Esto es una prueba de la nueva ramma</h1>
        {/* <!-- FORM --> */}
        <Form />
        {/* <!-- CREATED DATES --> */}
        <Dates/>
      </div>
    </div>
  );
}

export default App;
