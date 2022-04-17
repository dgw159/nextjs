import Cabecalho from "../components/cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){
    return(
        <Layout titulo='usando components'>
            <Cabecalho titulo = "Next.JS & React"></Cabecalho>
            <Cabecalho titulo = "Aprenda Next na pratica"/>
        </Layout>
    )
}