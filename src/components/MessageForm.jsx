import { MessageFormContainer } from "./StyledMessageForm";



function MessageForm() {

    return (
        <MessageFormContainer>
            <select
                type="text"
                  >
                <option>Eu</option>
                <option>Turma</option>
            </select >

            <input
                placeholder="Mensagem"
                type="text"
                />

            <button type="submit">Enviar</button>
        </MessageFormContainer>
    );
}

export default MessageForm;
