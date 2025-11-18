import { useState } from "react";

export default function ArrayPushPop() {

    const [lista, setLista] = useState(["React", "JS"]);
         function adicionar(){ 
            setLista([...lista, "Novo"])
         }

         function remover(){
            setLista(lista.slice(0, -1))
         }


    return(
        <div>

            <h2>Exemplo 1: push() pop()</h2>

            <p>{JSON.stringify(lista)}</p>

            <button onClick={adicionar}>Adicionar (push)</button>

            <button onClick={remover}>Remover (pop)</button>

        </div>
    )





}