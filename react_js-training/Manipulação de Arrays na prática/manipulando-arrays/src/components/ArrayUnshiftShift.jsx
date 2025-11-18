import { useState } from "react";

export default function ArrayUnshiftShift() {

    const [lista, setLista] = useState(["B"]);

    function adicionarInicio(){

        const novaLista = [...lista];
        novaLista.unshift("A");
        setLista(novaLista);
    }

    function removerInicio(){

        const novaLista = [...lista];
        novaLista.shift();
        setLista(novaLista);
    }


    return(
        <div>
            <h2>Exemplo 2: unshift() shift()</h2>
            <p>{JSON.stringify(lista)}</p>
            <button onClick={adicionarInicio}>Adicionar no inicio</button>
            <button onClick={removerInicio}>Remover no Inicio</button>
        </div>
    )
}