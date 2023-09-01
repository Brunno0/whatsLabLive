
import MessageForm from './MessageForm';
import GlobalStyle from '../GlobalStyled';
import { AppContainer,} from './StyledChat';

function Chat() {
    
    return (
        <AppContainer>
            <GlobalStyle />
            <MessageForm/>
        </AppContainer >
    );
}

export default Chat;
