import { useState } from "react";
import {
  ButtonForm,
  InputForm,
  MessageFormContainer,
  SelectForm,
} from "./StyledMessageForm";

function MessageForm({ addMessage }) {
  const [user, setUser] = useState("Eu");
  const [text, setText] = useState("");

  const onSendMessage = (event) => {
    event.preventDefault();

    const message = {
      user,
      text,
    };

    addMessage(message);
    setText("");
  };
  return (
    <MessageFormContainer onSubmit={onSendMessage}>
      <SelectForm
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        value={user}
      >
        <option>Eu</option>
        <option>Turma</option>
      </SelectForm>

      <InputForm
        placeholder="Mensagem"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />

      <ButtonForm type="submit">Enviar</ButtonForm>
    </MessageFormContainer>
  );
}

export default MessageForm;
