export default function Jsx(){
   const titulo = <h1>JSX é uma conceito central</h1>

   function subtitulo() {
       return <h2>{"Boa noite".toUpperCase()}</h2>
   }

    return (
        <dic>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'joao', idade: 30})}
            </p>
        </dic>
    )
}