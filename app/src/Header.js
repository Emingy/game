import React from 'react'
import './Header.scss';

const Header = () => {
    return (
        <header className="App-header">
          <a href="#" className="App-header-logo">MyGame</a>
          <div>
            <a href="#" className="active">О игре</a>
            <a href="#" >Правила</a>
            <a href="#" >Играть</a>
            <button>Войти</button>
          </div>
        </header>
    );
  }
export default Header