import { useState } from "react";


function ArraySplice(){

    const [lista, setLista] = useState(["Item1", "Item2", "Item3"]);


    function adicionar(){

        const novaLista = [...lista];
        novaLista.splice(1, 0, "Novo");
        setLista(novaLista);

    }


    function remover(){

        const novaLista = [...lista];
        novaLista.splice(2,1);
        setLista(novaLista);
    }

    function substituir(){

        const novaLista = [...lista];
        novaLista.splice(1,1, "Substituto");
        setLista(novaLista);
    }

    return(
        <div>
            <h2>Exemplo 4: Splice</h2>
            <p>{JSON.stringify(lista)}</p>

            <button onClick={adicionar}>Adicionar na posição 1</button>
            <button onClick={remover}>Remover posição 2</button>
            <button onClick={substituir}>Substituir posição 1</button>
        </div>
    )
}

















export default ArraySplice