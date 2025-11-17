import { useState } from "react";

export default function DeclaracaoArray() {
    
  const [exemplo1] = useState([10, 20, 30]);
  const [exemplo2] = useState(["React", "JS", "HTML"]);
  const [exemplo3] = useState(new Array(3));

  return (
    <div>

      <h2>Declaração e Inicialização</h2>

      <h3>Array literal</h3>
      <p>{JSON.stringify(exemplo1)}</p>

      <h3>Array com strings</h3>
      <p>{JSON.stringify(exemplo2)}</p>

      <h3>new Array</h3>
      <p>{JSON.stringify(exemplo3)}</p>

    </div>
  );
}
