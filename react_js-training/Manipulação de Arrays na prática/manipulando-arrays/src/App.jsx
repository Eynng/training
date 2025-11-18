import Separador from "./components/Separador";
import ErroMutacaoArray from "./components/ErroMutacaoArray";
import ArrayPushPop from "./components/ArrayPushPop";
import ArrayUnshiftShift from "./components/ArrayUnshiftShift";
import ArrayUpdateByIndex from "./components/ArrayUpdateByIndex";
import ArraySplice  from "./components/ArraySplice";

export default function App() {
  return(

<div style={{margin:"20px"}}>


  <ErroMutacaoArray />
  <Separador />

  <ArrayPushPop />
  <Separador />

  <ArrayUnshiftShift />
  <Separador />

  <ArrayUpdateByIndex />
   <Separador />

   <ArraySplice />
   <Separador />
  
  
</div>






  )
}