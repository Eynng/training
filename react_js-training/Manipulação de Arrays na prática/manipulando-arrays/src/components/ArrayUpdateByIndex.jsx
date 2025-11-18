import { useState } from "react";

function ArrayUpdateByIndex(){
    const [lista, setLista] = useState(["Maçã", "Banana", "Laranja"]);

    function alterarSegundo(){
        const novaLista = [...lista];
        novaLista[1] = "Abacaxi";
        setLista(novaLista);
    }











    return(
        <div>
            <h2>Exemplo 3: Alterar o índice</h2>
            <p>{JSON.stringify(lista)}</p>

            <button onClick={alterarSegundo}>Alterar índice 1</button>
        </div>
    )
}



export default ArrayUpdateByIndex