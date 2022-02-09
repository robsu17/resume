export default function Evento({numero}) {
    function meuEvento () {
        console.log(`Ativado ${numero}`)
    }

    return (
        <>
            <p>Cliique para disparar Evento.</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}