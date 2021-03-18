import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'project-ID': "8d0dcaa1-7b91-4e25-8d3d-43feb55965a3", 'User-Name': username, 'User-Secret': password };

    try {
      // username / password => chatengine -> give message
      await axios.get('https://api.chatengine.io/chats', {headers: authObject });

      // works out -> logged in
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch {
      // error -> try with new username ...
      setError('Incorrect credentials. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h4 className="error">{error}</h4>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
