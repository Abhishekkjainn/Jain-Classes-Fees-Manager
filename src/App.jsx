import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Menupage from './components/menupage';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header setMenuOpen={setMenuOpen} />
      <Menupage isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default App;
