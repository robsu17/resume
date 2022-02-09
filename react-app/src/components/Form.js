export default function Form() {
    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log('Usuario Cadastrado!')
    }
    return (
        <div>
            <h1>cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Seu nome" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}