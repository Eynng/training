import { useState } from "react";

export default function IteracaoFor() {
  const [lista] = useState(["Ana", "Bia", "Carlos", "Daniel"]);
  const [resultado, setResultado] = useState([]);

  function percorrerComFor() {
    let temp = [];
    for (let i = 0; i < lista.length; i++) {
      temp.push(`Posição ${i}: ${lista[i]}`);
    }

    setResultado(temp);
  }

  return (

    <div>
        <h2>Iteração com for tradicional</h2>

        <button onClick={percorrerComFor}>Percorrer lista</button>

        {resultado.map((item, index)=>(

            <p key={index}> {item}</p>
        ))}

    </div>
  )
}
