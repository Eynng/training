import { useState } from "react";

export default function AcessoElementos() {

  const [numeros] = useState([5, 10, 15, 20, 25]);


  return(

    <div>


        <h2>Acessando Elementos</h2>
        <p>Array Completo: {JSON.stringify(numeros)}</p>

        <p>Primeiro elemento: {numeros[0]}</p>

        <p>Último elemento: {numeros[numeros.length - 1]}</p>

        <p>Tamanho do array (length): {numeros.length} </p>
    </div>



  );
}
