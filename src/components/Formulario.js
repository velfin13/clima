import React, { useState } from "react";
import { Error } from "./Error";

export const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {
  //state de error
  const [error, guardarError] = useState(false);

  //extraer variables del formulario
  const { ciudad, pais } = busqueda;

  //funcion que actualiza los datos
  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario envia el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }

    //si pasa la validacion
    guardarError(false);

    //enviar datos al componente principal
    guardarConsulta(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Existen campos vacios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" value={pais} onChange={handleChange}>
          <option value="">--Seleccione un país--</option>
          <option value="EC">Ecuador</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais:</label>
        <div className="input-field col s12">
          <input
            type="submit"
            value="Consultar clima"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
        </div>
      </div>
    </form>
  );
};
