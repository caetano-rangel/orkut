import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './json/users.json'; // Importar os dados do JSON
import './styles/app.sass';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encontrar o usuário no arquivo JSON
    const user = users.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Armazenar o nome do usuário no localStorage
      localStorage.setItem('loggedUser', JSON.stringify(user));
      // Redireciona para a página home
      navigate('/home');
    } else {
      alert('Nome ou senha incorretos!');
    }
  };

  return (
    <div className='page'>
      <div className='tab'>
        <p className='tab-title'>Orkut 2.0 Oss</p>
      </div>

      <div className='login'>
        <div className='title'>
          <h1 className='orkut'>Orkut 2.0</h1>
          <p className='sub-title'><span className="highlight">Conheça</span> novas pessoas através de amigos dos seus amigos!</p>
          <p className='sub-title'><span className="highlight">Compartilhe</span> seus videos e fotos em um só lugar!</p>
        </div>

        <div className='form-box'>
          <p className='title-form'>Acesse o orkut 2.0 com sua conta!</p>
          <form className='form' onSubmit={handleSubmit}>
            <p className='p-form'>Nome:</p>
            <input
              className='input'
              type='text'
              placeholder='digite seu nome...'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <p className='p-form'>Senha:</p>
            <input
              className='input'
              type='password'
              placeholder='digite sua senha...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input className='submit' type='submit' value='Login' />
          </form>
        </div>
      </div>
    </div>
  );
}
