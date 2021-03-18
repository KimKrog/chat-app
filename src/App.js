import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
  if ( !localStorage.getItem('username') ) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="8d0dcaa1-7b91-4e25-8d3d-43feb55965a3"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
