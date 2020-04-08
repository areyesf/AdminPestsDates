import React from "react";
import Form from "./components/Form";
import Dates from './components/Dates';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <!-- FORM --> */}
        <Form />
        {/* <!-- CREATED DATES --> */}
        <Dates/>
      </div>
    </div>
  );
}

export default App;
