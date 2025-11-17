import Separador from "./components/Separador";
import IntroVetores from "./components/IntroVetores";
import DeclaracaoArray from "./components/DeclaracaoArray";
import AcessoElementos from "./components/AcessoElementos";
import IteracaoFor from "./components/IteracaoFor";
import IteracaoForEach from "./components/IteracaoForEach";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <IntroVetores />
      <Separador />

      <DeclaracaoArray />
      <Separador />

      <AcessoElementos />
      <Separador />

      <IteracaoFor />
      <Separador />

      <IteracaoForEach />
      <Separador />
    </div>
  );
}
