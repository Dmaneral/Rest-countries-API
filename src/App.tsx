import './App.css';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';

export const ThemeContext = createContext<{ theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> } | null>(null);

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (
      curr === 'dark' ? 'light' : 'dark'
    ))
    console.log(theme);
  }
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id={theme}>
        <header>
          <h1>Where in the world?</h1>
          <div className="theme" onClick={toggleTheme}>
            Switch Theme
          </div>
        </header>
        <div className="content">
          <Routes>
            <Route path='/' element={<CountryList />}/>
            <Route path='/:countryName' element={<CountryInfo />}/>
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
