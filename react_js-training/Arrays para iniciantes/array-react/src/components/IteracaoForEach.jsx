import { useState } from "react";

export default function IteracaoForEach() {
  const [nomes] = useState(["lara", "Maria", "Jose", "Pedro"]);
  const [resultado, setResultado] = useState([]);

  function percorrerForEach() {
    let temp = [];
    nomes.forEach((nomes, indice) => {
      temp.push(`${indice} - ${nomes}`);
    });

    setResultado(temp);
  }

  return(

    <div>
        <h2>Iteração com forEach</h2>
        <button onClick={percorrerForEach}>Executar forEach</button>

        {resultado.map((item, i)=>(

            <p key={i}> {item}</p>



        ))}
    </div>
  )






}
