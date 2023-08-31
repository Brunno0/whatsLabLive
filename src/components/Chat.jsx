
import MessageForm from './MessageForm';
import GlobalStyle from '../GlobalStyled';
import { AppContainer,} from '../AppStyled';

function Chat() {
    
    return (
        <AppContainer>
            <GlobalStyle />
            <MessageForm />
        </AppContainer>
    );
}

export default Chat;
