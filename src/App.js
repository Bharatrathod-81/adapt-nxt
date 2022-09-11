import { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { SideBar } from './components/side-bar/Side-bar';
import { HomePage } from './pages/Home-page/Home-page';

function App() {

  const [value, setValue] = useState(null);
  return (
    <div className="App">
      <Header />
      <div className='main_container'>
        <SideBar prop={{setValue,value}}/>
        <HomePage prop={{setValue,value}}/>
      </div>
    </div>
  );
}

export default App;
