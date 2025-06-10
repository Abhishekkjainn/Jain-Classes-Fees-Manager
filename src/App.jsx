import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Menupage from './components/menupage';
import Homepage from './pages/homepage';
import AddAStudent from './pages/addAStudent';
import Bottombar from './components/bottombar';
import Dashboard from './pages/dashboard';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  return (
    <>
      <Header setMenuOpen={setMenuOpen} />
      <Menupage isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      {selectedPage === 0 && <Dashboard />}
      {selectedPage === 1 && <Homepage />}
      {selectedPage === 2 && <AddAStudent />}
      <Bottombar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
}

export default App;
