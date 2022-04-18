import Navegador from "../components/navegador";

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#8a2be2"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao/" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/CE-01/123" cor="darkblue"/>
            <Navegador texto="Component com estado" destino="/estado" cor="purple"/>
            <Navegador texto="integração com API#01" destino="/integracao_1" cor="#ffaf75"/>
            <Navegador texto="Conteudo Estatico" destino="/estatico" cor="#6aa893"/>
        </div>)
}