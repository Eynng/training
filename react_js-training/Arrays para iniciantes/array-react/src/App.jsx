import Separador from "./components/Separador";
import IntroVetores from "./components/IntroVetores";
import DeclaracaoArray from "./components/DeclaracaoArray";
import AcessoElementos from "./components/AcessoElementos";

export default function App(){

    return (
        <div style={{padding: "20px"}}>

            <IntroVetores/>
            <Separador/>

            <DeclaracaoArray/>
            <Separador/>

            <AcessoElementos/>
            <Separador/>
        </div>
    )
}