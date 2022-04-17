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
        </div>)
}