import React from 'react';
import Input from './Input';
import useForm from '../Hooks/useForm';
import Select from './Select';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Produtos';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import Header from './Header.jsx';

const optionsCidades = ['Cachoeiro', 'Vitória', 'Serra'];

function App() {
  const cep = useForm('cep');
  const [selectCidadeValue, setSelectCidadeValue] = React.useState('');

  return (
    <>
      <div>
        <Input inputType="text" labelText="CEP" {...cep} />
      </div>
      <Select
        labelText="Escolha uma cidade: "
        options={optionsCidades}
        id="cid"
        name="cid"
        value={selectCidadeValue}
        setValue={setSelectCidadeValue}
      />
      {selectCidadeValue && <p>{selectCidadeValue}</p>}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          {/* <Route path="/editar/produtos/:id" element={<Editar />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
