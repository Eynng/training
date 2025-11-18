import { useState } from "react";

export default function ErroMutacaoArray() {

    
  const [lista, setLista] = useState(["A", "B", "C"]);

  function adicionar() {


    lista.pusgh("D");
    setLista(lista);
    console.log("Lista atual: ", lista);


  }

  return (


    <div>
      <h2>Mutação Direta (Não funciona)</h2>

      <p>{JSON.stringify(lista)}</p>

      <button onClick={adicionar}>Adicionar</button>
    </div>


  );
}
