import React from "react";
import Form from "./Form";
import Propriedades from "./Propriedades";
import RestESpread from "./RestESpread";

const App = () => {
  return <div>
    <Form />
    <Propriedades />
    <RestESpread type="text" label="MENSAGEM" id="msg"/>
  </div>
}

export default App