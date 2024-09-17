import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/home.sass';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recupera as informações do usuário armazenadas no localStorage
    const loggedUser = localStorage.getItem('loggedUser');
    
    if (loggedUser) {
      setUser(JSON.parse(loggedUser)); // Atualiza o estado com os dados do usuário
    }
  }, []);

  return (
    <div className='home-page'>
      {user ? (
        <>
          <nav className='nav'>
  <ul className='nav-ul'>
    <p className='orkut-nav'>orkut 2.0</p>
    <div className='nav-links'>
      <li className='nav-li'><Link to="/orkut">Login</Link></li>
      <li className='nav-li'><Link to="/home">Perfil</Link></li>
      <li className='nav-li'><Link to="/friends">Amigos</Link></li>
      <li className='nav-li'><Link to="/comunidade">Comunidades</Link></li>
    </div>
  </ul>
</nav>
          <div className='profile-box'>
            <aside className='aside'>

              <div className='photo'>
                  <img src={user.photoUrl} alt={`${user.name}'s photo`} />
              </div>

              <div className='aside-infos'>
                <p className='aside-name'>{user.name}</p>
                <div className='line-aside'/>
                <p className='status'>Visivel</p>
                <div className='line-aside'/>
                <div className='aside-box'>
                    <p className='sub-aside'>+ Amigos</p>
                    <p className='sub-aside'>Perfil</p>
                    <p className='sub-aside'>Recados</p>
                    <p className='sub-aside'>Fotos</p>
                    <p className='sub-aside'>Videos</p>
                </div>
                <div className='line-aside'/>
              </div>

            </aside>

            <div className='profile-infos'>

                <div className='header'>
                    <div className='name'>
                        <h1 className='bv'>Bem vindo {user.name}</h1>
                        <button className='add'>+ Add Friend</button>
                    </div>
                    <p className='luck'>Sua Sorte do dia: </p>
                    <div className='line'></div>
                    <p className='about'>Sobre: {user.sobre}</p>
                    <div className='line'></div>
                </div>
                
                <div className='social-box'>
                    <h1 className='social-title'><span className='social-span'>Social</span></h1>
                    <div className='social-list'>
                        <p className='list-a'><span className='bold'>Relacionamento:</span> {user.relacionamento}</p>
                        <p className='list-b'><span className='bold'>Aniversário:</span> {user.niver}</p>
                        <p className='list-a'><span className='bold'>Idade:</span> {user.age}</p>
                        <p className='list-b'><span className='bold'>Orientação Sexual:</span> {user.sex}</p>
                        <p className='list-a'><span className='bold'>Interesses:</span> {user.interesse}</p>
                        <p className='list-b'><span className='bold'>Moro:</span> {user.moro}</p>
                        <p className='list-a'><span className='bold'>Cidade Natal:</span> {user.cidade}</p>
                        <p className='list-b'><span className='bold'>Bebo:</span> {user.bebo}</p>
                        <p className='list-a'><span className='bold'>Fumo:</span> {user.fumo}</p>
                        <p className='list-b'><span className='bold'>Signo:</span> {user.signo}</p>
                        <p className='list-a'><span className='bold'>Sapato:</span> {user.sapato}</p>
                        <p className='list-b'><span className='bold'>Humor:</span> {user.humor}</p>
                        <p className='list-a'><span className='bold'>Treina:</span> {user.treina}</p>
                        <p className='list-b'><span className='bold'>Fobia:</span> {user.fobia}</p>
                        <p className='list-a'><span className='bold'>Lugar Favorito:</span> {user.lugar}</p>
                        <p className='list-b'><span className='bold'>Cor:</span> {user.cor}</p>
                        <p className='list-a'><span className='bold'>Comida:</span> {user.comida}</p>
                        <p className='list-b'><span className='bold'>Tatuagem:</span> {user.tatuagem}</p>
                        <p className='list-a'><span className='bold'>Apelido:</span> {user.apelido}</p>
                    </div>
                </div>
            </div>
          </div>
        </>
      ) : (
        <p>Usuário não encontrado.</p>
      )}
    </div>
  );
}
