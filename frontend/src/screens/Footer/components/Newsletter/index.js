import React from 'react';

export default function Newsletter() {
  return (
    <>
      <h4>NEWSLETTER</h4>
      <p>
        No te pierdas todas nuestras novedades y los mejores descuentos
        <form action="">
          <input placeholder="Email..." type="text" />
          <input type="submit" value="Enviar" />
        </form>
      </p>
    </>
  );
}
